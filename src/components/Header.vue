<template>
  <div
    class="
      flex
      justify-between
      items-center
      border-b-2 border-gray-100
      py-6
      md:justify-start md:space-x-10
    "
  >
    <h2
      class="
        text-2xl
        font-bold
        leading-7
        text-gray-900
        sm:text-3xl sm:tracking-tight sm:truncate
      "
    >
      Supabase and Okta
    </h2>

    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <button
        v-if="authState?.isAuthenticated"
        href="/overview"
        class="btn btn-outline"
        @click="this.$auth.signOut"
      >
        Logout
      </button>
      <a v-if="!authState?.isAuthenticated" href="/overview" class="btn">
        Login
      </a>
    </div>
  </div>
</template>