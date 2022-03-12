<template>
  <div class="divide-y divide-slate-10 w-screen">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        class="
          rounded-lg
          px-10
          mt-28
          m-10
          h-96
          grid grid-cols-1
          lg:grid-cols-2
          gap-4
          content-center
        "
      >
        <img
          :src="product.imageSrc"
          :alt="product.imageAlt"
          class="w-68 h-68 object-center object-cover"
        />
        <div class="m-8">
          <h3 class="text-lg font-semibold">{{ product.name }}</h3>
          <p class="text-xl mt-3 mb-7">${{ product.price }}</p>
          <a v-on:click="addToCart" class="cursor-pointer text-white bg-amber-500 rounded-lg p-3 hover:bg-amber-600 active:bg-amber-800 transition-colors duration-200">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id);
    },
  },
};
</script>
