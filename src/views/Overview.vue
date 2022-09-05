<script setup>
import Calendar from '../components/Calendar.vue'
</script>


<template>
  <main>
    Hello {{ name }}:

    <Calendar
      :initialMonth="new Date().getMonth()"
      :initialYear="new Date().getFullYear()"
    />
  </main>
</template>


<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {},
  async mounted() {
    const resp = await this.$auth.token.getUserInfo()
    this.name = resp.name;
  },
}
</script>

