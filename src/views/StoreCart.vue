<template>
  <div class="divide-y divide-slate-10 w-screen">
    <h1 class="text-center text-5xl py-7">Cart</h1>
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <ul
        class="grid grid-cols-1 justify-items-center"
        v-for="item in cartItems"
        :key="item.id"
      >
        <div>
          <div
            class="
              bg-stone-100
              rounded-lg
              px-8
              m-4
              h-80
              w-max
              sm:h-56
              grid grid-cols-1
              sm:grid-cols-2
              gap-4
              content-center
            "
          >
            <router-link :to="'/store/' + item.id">
              <img
                :src="item.imageSrc"
                :alt="item.imageAlt"
                class="w-44 h-44 object-center object-cover"
              />
            </router-link>
            <div>
              <h3 class="mt-4 text-sm text-gray-700">
                {{ item.name }}
              </h3>
              <p class="mt-1 text-lg font-medium text-gray-900">
                ${{ item.price }}
              </p>
              <button
                v-on:click="removeFromCart(item.id)"
                class="
                  font-light
                  transition-colors
                  duration-200
                  hover:text-stone-400
                "
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </ul>
      <div
        class="
          w-96
          grid grid-cols-2
          mt-4
          justify-items-center
          max-w-2xl
          mx-auto
          py-16
          px-4
          sm:py-4 sm:px-6
          lg:max-w-7xl lg:px-8
        "
      >
        <div class="font-bold text-xl mt-2">Total: ${{ totalPrice }}</div>
        <form
          action="http://localhost:5000/create-checkout-session"
          method="POST"
        >
          <button
            v-on:click="changeAmount()"
            class="
              bg-amber-500
              hover:bg-amber-600
              active:bg-amber-800
              p-2
              px-6
              font-medium
              text-white
              rounded-lg
              transition-colors
              duration-200
            "
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsId() {
      let allId = [];
      this.cartItems.forEach((item) => {
        allId.push(item.id);
      });
      return allId;
    },
    totalPrice() {
      let total = 0;
      this.cartItems.forEach((element) => {
        total += element.price;
      });
      return total;
    },
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    },
    changeAmount() {
      const path = "http://localhost:5000/getData";
      this.axios
        .post(path, { total: this.totalPrice, items: this.cartItemsId, status: 'ongoing' })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push("/checkout");
    },
  },
};
</script>