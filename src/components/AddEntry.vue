<template>
  <div>
    <div class="md:grid">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <h4 class="h2">Add a new entry</h4>

        <form method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3">
                  <label for="date" class="label"> Date </label>
                  <datepicker
                    class="w-full input input-md input-bordered"
                    v-model="entry.date"
                    :clearable="false"
                  />
                </div>
                <div class="col-span-1">
                  <label class="label cursor-pointer">
                    <span>Public?</span>
                    <input
                      v-model="entry.isPublic"
                      type="checkbox"
                      checked="checked"
                      class="checkbox"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label for="description" class="label"> Title </label>
                <div class="mt-1">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    v-model="entry.title"
                    class="input input-md input-bordered w-full"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">Title of the entry</p>
              </div>

              <div>
                <label for="description" class="label"> Description </label>
                <div class="mt-1">
                  <textarea
                    name="description"
                    rows="8"
                    class="input input-md input-bordered w-full h-full"
                    v-model="entry.description"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Brief description about the entry
                </p>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button class="btn" @click="save">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entry: {
        date: undefined,
        isPublic: false,
        description: '',
        title: ''
      },
    }
  },
  mounted() {
    this.entry.date = this.date
  },
  methods: {
    save(e) {
      e.preventDefault()
      this.onSaved(this.entry)
    },
    cancel() {
      this.onCancelled()
    },
  },
  props: {
    date: Date,
    onSaved: Function,
    onCancelled: Function,
  },
}
</script>
