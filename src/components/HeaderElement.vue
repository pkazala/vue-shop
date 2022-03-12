<template>
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8 lg:py-20
    "
  >
    <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
      <div class="flex flex-col justify-center">
        <div class="max-w-xl mb-6">
          <div>
            <p
              class="
                inline-block
                px-3
                py-px
                mb-4
                text-xs
                font-semibold
                tracking-wider
                text-teal-900
                uppercase
                rounded-full
                bg-teal-accent-400
              "
            >
              Brand new
            </p>
          </div>
          <h2
            class="
              max-w-lg
              mb-6
              font-sans
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-4xl sm:leading-none
            "
          >
            Official e-sports apparel<br class="hidden md:block" />
            from all the teams
            <span class="inline-block text-amber-500">you love</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Check out all of our new arrivals for the 2022 season and pick the
            ones you love the most!
          </p>
        </div>
        <div class="flex items-center ml-2">
          <router-link
            to="/store"
            aria-label=""
            class="
              inline-flex
              items-center
              font-semibold
              text-amber-500
              transition-colors
              duration-200
              hover:text-amber-700
            "
            >Shop now</router-link
          >
        </div>
      </div>
      <div
        class="
          relative
          bg-[url('./assets/shopping.svg')] bg-contain bg-no-repeat bg-center
        "
      ></div>
    </div>
  </div>
</template>