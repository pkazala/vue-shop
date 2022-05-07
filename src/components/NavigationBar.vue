<template>
  <nav
    class="
      relative
      py-5
      px-10
      text-1
      font-medium
      flex
      justify-left
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
    "
  >
    <ul class="flex items-center space-x-3">
      <router-link :to="'/'">
      <h1 class="text-xl cursor-pointer font-logo"><span class="text-amber-500">e</span>-jerseys</h1>
      </router-link>
      <slot></slot>
    </ul>
    <p v-if="this.$store.state.username != ''" class="ml-4 mt-2 font-light">Signed in as: {{ this.$store.state.username }}</p>
    <router-link :to="'/cart'">
      <div
        v-if="this.$store.state.cart.length > 0"
        class="
          flex
          absolute
          right-7
          w-5
          h-5
          top-4
          rounded-lg
          justify-center
          items-center
          bg-amber-500
          text-white
        "
      >
        {{ this.$store.state.cart.length }}
      </div>
      <svg
        class="absolute right-10 w-8 top-6"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="{2}"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </router-link>
  </nav>
</template>