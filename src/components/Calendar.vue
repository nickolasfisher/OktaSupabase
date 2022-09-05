<script setup>
import Day from './Day.vue'
import AddEntry from './AddEntry.vue'
import EntryDetail from './EntryDetail.vue'
import { supabase } from '../supabase'
</script>

<template>
  <div v-if="entries" class="">
    <div class="text-gray-700">
      <!-- Component Start -->
      <div class="flex flex-grow w-full h-screen overflow-auto">
        <div class="flex flex-col flex-grow">
          <div class="flex items-center mt-4">
            <div class="flex ml-6">
              <button @click="previousMonth()">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button @click="nextMonth()">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <h2 class="ml-2 text-xl font-bold leading-none">
              {{
                new Date(year, month, 1).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })
              }}
            </h2>
          </div>
          <div class="grid grid-cols-7 mt-4">
            <div class="pl-1 text-sm">Sun</div>
            <div class="pl-1 text-sm">Mon</div>
            <div class="pl-1 text-sm">Tue</div>
            <div class="pl-1 text-sm">Wed</div>
            <div class="pl-1 text-sm">Thu</div>
            <div class="pl-1 text-sm">Fri</div>
            <div class="pl-1 text-sm">Sat</div>
          </div>
          <div
            class="
              grid
              flex-grow
              w-full
              h-auto
              grid-cols-7 grid-rows-5
              gap-px
              pt-px
              mt-1
              bg-gray-200
            "
          >
            <div v-for="n in firstWeekSkipDays" :key="n"></div>
            <Day
              v-for="n in numberOfDaysInMonth"
              :key="n"
              :date="new Date(year, month, n)"
              :onNewEntryClick="addEntry"
              :onEntryClick="showEntryDetail"
              :entries="
                entries.filter((r) => {
                  const d = new Date(r.date.replace(' ', 'T'))
                  return (
                    new Date(
                      d.getFullYear(),
                      d.getMonth(),
                      d.getDate()
                    ).getTime() === new Date(year, month, n).getTime()
                  )
                })
              "
            />
          </div>
        </div>
      </div>
      <!-- Component End  -->

      <div
        v-if="selectedEntry"
        id="entry-detail-modal"
        class="modal"
        :class="{ 'modal-open': showEntryDetailModal }"
      >
        <div class="modal-box w-11/12 max-w-5xl">
          <label
            @click="hideEntryDetail"
            for="entry-detail-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label
          >
          <EntryDetail :entry="selectedEntry" />
        </div>
      </div>

      <div
        v-if="authState?.isAuthenticated && entryDate"
        id="add-entry-modal"
        class="modal"
        :class="{ 'modal-open': showModal }"
      >
        <div class="modal-box w-11/12 max-w-5xl">
          <label
            @click="endAddEntry"
            for="add-entry-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label
          >
          <AddEntry
            :date="entryDate"
            :onSaved="saveEntry"
            :onCancelled="endAddEntry"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: parseInt(this.initialMonth),
      year: parseInt(this.initialYear),
      numberOfDaysInMonth: 0,
      showModal: false,
      entryDate: undefined,
      entries: [],
      showEntryDetailModal: false,
      selectedEntry: undefined,
    }
  },
  computed: {
    numberOfDaysInMonth() {
      return new Date(this.year, this.month + 1, 0).getDate()
    },
    firstWeekSkipDays() {
      return new Date(this.year, this.month, 1).getDay()
    },
  },
  async mounted() {
    await this.getEntries()
  },
  methods: {
    async getEntries() {
      const startdate = new Date(this.year, this.month, 1)
      const endDate = new Date(this.year, this.month + 1, 1)

      const query = supabase
        .from('Entries')
        .select()
        .gte('date', startdate.toLocaleString())
        .lt('date', endDate.toLocaleString())

      if (!this.authState?.isAuthenticated) {
        query.eq('isPublic', true)
      }
      const { data, error } = await query
      this.entries = data
    },
    async previousMonth() {
      this.year = this.month === 0 ? this.year - 1 : this.year
      this.month = (((this.month - 1) % 12) + 12) % 12

      await this.getEntries()
    },
    async nextMonth() {
      this.year = this.month === 11 ? this.year + 1 : this.year
      this.month = (this.month + 1) % 12

      await this.getEntries()
    },
    addEntry(date) {
      this.entryDate = date
      this.showModal = true
    },
    async saveEntry(entry) {
      const { data, error } = await supabase.from('Entries').upsert(entry)

      if (data) {
        this.entries.push(data[0])
      }

      this.endAddEntry()
    },
    endAddEntry() {
      this.entryDate = undefined
      this.showModal = false
    },
    showEntryDetail(entryId) {
      this.selectedEntry = this.entries.filter((r) => r.id === entryId)[0]
      this.showEntryDetailModal = true
    },
    hideEntryDetail() {
      this.showEntryDetailModal = false
      this.selectedEntry = undefined
    },
  },
  props: {
    initialMonth: Number,
    initialYear: Number,
  },
}
</script>