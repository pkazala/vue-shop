<template>
  <h1 class="text-center text-xl font-semibold py-3">Order summary</h1>
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
        <div>
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
            class="ml-3 hover:text-stone-600"
          >
            Apply
          </button>
          <p>{{ this.output }}</p>
        </div>
        <form
          action="http://localhost:5000/create-checkout-session"
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
      total: 10,
    };
  },
  computed: {
      totalprice: function() {
      let total = 0;
      this.$store.state.cart.forEach((element) => {
        total += element.product.price * element.quantity;
      });
      return total;
    },
  },
  methods: {
    apply_discount() {
      for (const code of this.$store.state.disc_codes) {
        if (code.name === this.discount) {
          let save = this.totalprice;
          this.output = "Discount code applied";
          this.totalprice = save * code.value;
          this.savemsg =
            "You saved " +
            Math.round(save - this.totalprice) +
            "$ with discount code " +
            code.name;
          break;
        } else {
          this.output = "Invalid discount code";
        }
      }
    },
  },
};
</script>