<template>
  <div class="divide-y divide-slate-10 w-screen">
    <h1 class="text-center text-5xl py-7">Cart</h1>
    <ul
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <li
        class="flex-col cart-list__item"
        v-for="item in cartItems"
        :key="item.id"
      >
        <div>
          <div
            class="
              bg-gray-200
              rounded-lg
              px-10
              m-10
              mx-72
              h-56
              grid grid-cols-2
              gap-4
              content-center
            "
          >
            <img
              :src="item.imageSrc"
              :alt="item.imageAlt"
              class="w-44 h-max object-center object-cover"
            />
            <div>
              <h3 class="mt-4 text-sm text-gray-700">
                {{ item.name }}
              </h3>
              <p class="mt-1 text-lg font-medium text-gray-900">
                {{ item.price }}
              </p>
              <button
                v-on:click="removeFromCart(item.id)"
                class=""
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    },
  },
};
</script>