<template>
  <h1 class="text-center text-xl font-semibold py-3">Order summary</h1>
  <h2 class="text-center mt-1">Valid discount codes to try: DISC10, DISC20, TURBODISC50</h2>
  <div
    class="max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <div class="grid sm:grid-cols-2 grid-cols-1">
      <div>
        <ul
          v-for="item in this.$store.state.cart"
          :key="item.product.id"
          class="grid grid-cols-1 sm:justify-items-end justify-items-center"
        >
          <div
            class="
              bg-stone-100
              rounded-lg
              my-1
              sm:mr-5
              mr-0
              px-8
              h-32
              w-72
              sm:h-24
              grid grid-cols-2
              content-center
            "
          >
            <img
              :src="item.product.imageSrc"
              :alt="item.product.imageAlt"
              class="w-16 h-16 flex items-center justify-center"
            />
            <div>
              <h1>{{ item.product.name }}</h1>
              <div class="grid grid-cols-2 w-32">
                <p class="mr-2 font-light">Size: {{ item.curSize }}</p>
                <p class="font-light">Q: {{ item.quantity }}</p>
              </div>
            </div>
          </div>
        </ul>
        <div
          v-if="this.total === 0"
          class="
            grid grid-cols-1
            sm:justify-items-end
            justify-items-center
            sm:mr-56
            mr-52
            mt-1
            font-bold
          "
        >
          Total: ${{ Math.round(this.totalprice) }}
        </div>
        <div
          v-else
          class="
            grid grid-cols-1
            sm:justify-items-end
            justify-items-center
            sm:mr-56
            mr-52
            mt-1
            font-bold
          "
        >
          Total: ${{ Math.round(this.total) }}
        </div>
        <div
          class="
            grid grid-cols-1
            sm:justify-items-end
            justify-items-center
            mr-2
            mt-1
            font-bold
            text-green-400
          "
        >
          {{ this.savemsg }}
        </div>
      </div>
      <div
        class="
          bg-stone-100
          rounded-lg
          my-1
          sm:ml-5
          h-36
          w-72
          sm:mt-1
          mt-10
          ml-24
          grid
          place-items-center
        "
      >
        <div class="text-center">
          <p class="font-light text-lg">Apply discount code:</p>
          <input
            v-model="discount"
            placeholder="Discount Code"
            type="text"
            class="mt-3"
          />
          <button
            v-on:click="apply_discount()"
            class="ml-3 p-1 rounded-md bg-slate-200 transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Apply
          </button>
          <p
            v-if="this.output === 'Discount code applied'"
            class="text-green-400"
          >
            {{ this.output }}
          </p>
          <p v-else class="text-red-400">{{ this.output }}</p>
        </div>
        <form
          action="https://flask-server-app.herokuapp.com/create-checkout-session"
          method="POST"
          class=""
        >
          <button
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
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discount: "",
      output: "",
      savemsg: "",
      total: 0,
    };
  },
  computed: {
    totalprice: function () {
      let tot = 0;
      this.$store.state.cart.forEach((element) => {
        tot += element.product.price * element.quantity;
      });
      return tot;
    },
  },
  methods: {
    apply_discount() {
      for (const code of this.$store.state.disc_codes) {
        if (code.name === this.discount) {
          this.total = this.totalprice;
          let save = this.total;
          this.output = "Discount code applied";
          this.total = this.total * code.value;
          this.savemsg =
            "You saved " +
            Math.round(save - this.total) +
            "$ with discount code " +
            code.name;
          const path = "https://flask-server-app.herokuapp.com/getData";
          this.axios
            .post(path, {
              total: Math.round(this.total),
            })
            .catch((error) => {
              console.log(error);
            });
          break;
        } else {
          this.output = "Invalid discount code";
        }
      }
    },
  },
};
</script>