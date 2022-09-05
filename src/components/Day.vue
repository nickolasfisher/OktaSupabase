 <template>
  <div class="relative flex flex-col bg-white group">
    <span class="mx-2 my-1 text-xs font-bold"> {{ date.getDate() }} </span>
    <div class="flex flex-col px-1 py-1 overflow-auto">
      <button
        v-for="entry in entries"
        :key="entries.indexOf(entry)"
        class="
          flex
          items-center
          flex-shrink-0
          h-5
          px-1
          text-xs
          hover:bg-gray-200
        "
        @click="entryClick(entry.id)"
      >
        <span
          class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"
        ></span>
        <span class="ml-2 font-medium leading-none truncate">{{
          entry.title
        }}</span>
      </button>
    </div>

    <div v-if="authState.isAuthenticated">
      <button
        class="
          absolute
          bottom-0
          right-0
          flex
          items-center
          justify-center
          hidden
          w-6
          h-6
          mb-2
          mr-2
          text-white
          bg-gray-400
          rounded
          group-hover:flex
          hover:bg-gray-500
        "
        @click="add()"
      >
        <svg
          class="w-5 h-5 w-6 h-6 plus"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    entryClick(entryId) {
      this.onEntryClick(entryId)
    },
    add() {
      this.onNewEntryClick(this.date)
    },
  },
  props: {
    date: Date,
    entries: Array,
    onNewEntryClick: Function,
    onEntryClick: Function,
  },
}
</script>
