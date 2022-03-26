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
        <h1 class="text-3xl text-gray-900">Create a new account</h1>
        <form v-on:submit.prevent="registerUser()" class="mt-8 space-y-6 w-96">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="username"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="username"
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  mb-4
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-t-md
                  focus:outline-none
                  focus:ring-amber-500
                  focus:border-amber-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="password"
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-b-md
                  focus:outline-none
                  focus:ring-amber-500
                  focus:border-amber-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Password"
              />
            </div>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="
                group
                relative
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                text-sm
                font-medium
                rounded-md
                text-white
                bg-amber-500
                transition-colors
                duration-100
                hover:bg-amber-600
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-amber-500
              "
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Sign up
            </button>
            <p
              v-if="this.responseText != ''"
              class="mt-2 text-xl font-light text-red-600"
            >
              {{ this.responseText }}
            </p>
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
      username: "",
      password: "",
      responseText: "",
    };
  },
  methods: {
    registerUser() {
      this.axios
        .post("http://localhost:5000/register", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/success");
        })
        .catch((error) => {
          this.responseText = "E-mail already taken";
          console.log(error);
        });
      this.username = "";
      this.password = "";
    },
  },
};
</script>