<template>
  <ShopNavigation>
    <StoreNavItem v-on:click="$store.state.ItemType = 'jersey'"
      >Jerseys</StoreNavItem
    >
    <StoreNavItem v-on:click="$store.state.ItemType = 'apparel'"
      >Apparel</StoreNavItem
    >
    <StoreNavItem v-on:click="$store.state.ItemType = 'accesory'"
      >Accesories</StoreNavItem
    >
    <StoreNavItem v-on:click="$store.state.ItemType = 'all'">All</StoreNavItem>
  </ShopNavigation>
  <div :key="componentKey" class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        v-if="$store.state.ItemType === 'all'"
        class="
          grid grid-cols-1
          gap-y-10
          sm:grid-cols-2
          gap-x-6
          lg:grid-cols-3
          xl:grid-cols-4 xl:gap-x-8
        "
      >
        <router-link
          v-for="product in $store.state.products"
          :key="product.id"
          :to="'/store/' + product.id"
          class="group"
        >
          <div
            class="
              w-full
              aspect-w-1 aspect-h-1
              rounded-lg
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="
                w-full
                h-full
                object-center object-cover
                group-hover:opacity-75
              "
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            {{ product.name }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            ${{ product.price }}
          </p>
        </router-link>
      </div>
      <div
        v-else
        class="
          grid grid-cols-1
          gap-y-10
          sm:grid-cols-2
          gap-x-6
          lg:grid-cols-3
          xl:grid-cols-4 xl:gap-x-8
        "
      >
        <router-link
          v-for="product in productsRender"
          :key="product.id"
          :to="'/store/' + product.id"
          class="group"
        >
          <div
            class="
              w-full
              aspect-w-1 aspect-h-1
              rounded-lg
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="
                w-full
                h-full
                object-center object-cover
                group-hover:opacity-75
              "
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            {{ product.name }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            ${{ product.price }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ShopNavigation from "@/components/ShopNavigation.vue";
import StoreNavItem from "@/components/StoreNavItem.vue";


export default {
  setup() {
    return {};
  },
  props: ["app"],
  components: {
    ShopNavigation,
    StoreNavItem,
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  computed: {
    productsRender: function () {
      return this.$store.state.products.filter(
        (product) => product.type === this.$store.state.ItemType
      );
    },
  },
};
</script>