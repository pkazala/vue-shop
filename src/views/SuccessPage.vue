<template>
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div class="grid grid-cols-1 justify-items-center">
        <h1 class="mt-10 text-4xl text-green-600">Account created successfuly</h1>
        <router-link to="/auth"
          class="
            mt-12
            text-center
            py-1
            px-8
            bg-slate-200
            rounded-md
            transition-colors
            duration-100
            hover:bg-black hover:text-white
            mx-5
          "
        >
          Return to Sign in
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>