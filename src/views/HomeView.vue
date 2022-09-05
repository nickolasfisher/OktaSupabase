<script setup>
import Calendar from '../components/Calendar.vue'
</script>

<template>
  <main>
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-xl">
          <h1 class="text-5xl font-bold">Supabase and Okta</h1>
          <p class="pt-6">
           A small wellness application using <a href="#"> Supabase</a> for data.  Secured by <a href="#">Okta.</a>
          </p>
          <p class="pb-6">
            To view private entries or create a new one please Login below.
          </p>
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>

    <Calendar
      :initialMonth="new Date().getMonth()"
      :initialYear="new Date().getFullYear()"
    />
  </main>
</template>
