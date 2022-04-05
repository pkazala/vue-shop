<template>
  <div class="divide-y divide-slate-10 w-screen">
    <h1 class="text-center text-5xl py-7">Cart</h1>
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <ul
        class="grid grid-cols-1 justify-items-center"
        v-for="item in this.$store.state.cart"
        :key="item.product.id"
      >
        <div v-if="item">
          <div>
            <div
              class="
                bg-stone-100
                rounded-lg
                px-8
                m-4
                h-96
                w-max
                sm:h-56
                grid grid-cols-1
                sm:grid-cols-2
                gap-4
                content-center
              "
            >
              <router-link :to="'/store/' + item.product.id">
                <img
                  :src="item.product.imageSrc"
                  :alt="item.product.imageAlt"
                  class="w-44 h-44 object-center object-cover"
                />
              </router-link>
              <div class="grid grid-cols-2">
                <div class="ml-3">
                  <h3 class="mt-4 text-sm text-gray-700">
                    {{ item.product.name }}
                  </h3>
                  <p class="mt-1 text-lg font-medium text-gray-900">
                    {{ item.curSize }}
                  </p>
                  <p class="mt-1 text-lg font-medium text-gray-900">
                    ${{ item.product.price * item.quantity }}
                  </p>
                  <button
                    v-on:click="removeFromCart(item)"
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
                <div class="ml-8 mt-8">
                  <div
                    class="
                      bg-stone-300
                      w-10
                      h-22
                      grid grid-cols-1
                      place-items-center
                      content-center
                      opacity-80
                    "
                  >
                    <button
                      v-on:click="item.quantity += 1"
                      class="
                        w-full
                        text-2xl text-gray-500
                        hover:bg-stone-400
                        transition-colors
                        duration-100
                      "
                    >
                      +
                    </button>
                    <p class="font-medium text-sm text-gray-900">
                      {{ item.quantity }}
                    </p>
                    <button
                      v-if="item.quantity > 1"
                      v-on:click="item.quantity -= 1"
                      class="
                        w-full
                        text-2xl text-gray-500
                        hover:bg-stone-400
                        transition-colors
                        duration-100
                      "
                    >
                      -
                    </button>
                    <button
                      v-else
                      class="
                        w-full
                        text-2xl text-gray-500
                        hover:bg-stone-400
                        transition-colors
                        duration-100
                      "
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
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
          <button
            v-if="this.$store.state.cart.length === 0"
            v-bind:class="'pointer-events-none opacity-50'"
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
          <button
            v-else
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
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
  setup() {
    return {};
  },
  computed: {
    cartItemsId() {
      let allId = [];
      this.$store.state.cart.forEach((item) => {
        allId.push(item.product.id);
        allId.push(item.quantity);
        allId.push(item.curSize);
      });
      return allId;
    },
    totalPrice() {
      let total = 0;
      this.$store.state.cart.forEach((element) => {
        total += element.product.price * element.quantity;
      });
      return total;
    },
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    },
    changeAmount() {
      const path = "https://flask-server-app.herokuapp.com/getData";
      this.axios
        .post(path, {
          total: this.totalPrice,
          items: this.cartItemsId,
          status: "ongoing",
        })
        .catch((error) => {
          console.log(error);
        });
      if (this.$store.state.jwt === '') {
        this.$router.push("/auth");
        swal("Oops!", "You need to sign in to complete the transaction")
      } else {
        this.$router.push("/checkout");
      }
    },
  },
};
</script>