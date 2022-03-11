<template>
  <ShopNavigation>
    <StoreNavItem v-on:click="ItemType = 'jersey'">Jerseys</StoreNavItem>
    <StoreNavItem v-on:click="ItemType = 'apparel'">Apparel</StoreNavItem>
    <StoreNavItem v-on:click="ItemType = 'accesory'">Accesories</StoreNavItem>
    <StoreNavItem v-on:click="ItemType = 'all'">All</StoreNavItem>
  </ShopNavigation>
  <div :key="componentKey" class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        v-if="ItemType === 'all'"
        class="
          grid grid-cols-1
          gap-y-10
          sm:grid-cols-2
          gap-x-6
          lg:grid-cols-3
          xl:grid-cols-4 xl:gap-x-8
        "
      >
        <a
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          class="group"
        >
          <div
            class="
              w-full
              aspect-w-1 aspect-h-1
              bg-gray-200
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
            {{ product.price }}
          </p>
        </a>
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
        <a
          v-for="product in productsRender"
          :key="product.id"
          :href="product.href"
          class="group"
        >
          <div
            class="
              w-full
              aspect-w-1 aspect-h-1
              bg-gray-200
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
            {{ product.price }}
          </p>
        </a>
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
      ItemType: "all",
      componentKey: 0,
      products: [
        {
          id: 1,
          name: "Earthen Bottle",
          type: "jersey",
          href: "#",
          price: "$48",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 2,
          name: "Nomad Tumbler",
          type: "apparel",
          href: "#",
          price: "$35",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 3,
          name: "Focus Paper Refill",
          type: "jersey",
          href: "#",
          price: "$89",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
          imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
        },
        {
          id: 4,
          name: "Machined Mechanical Pencil",
          type: "accesory",
          href: "#",
          price: "$35",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
          imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
        },
        {
          id: 5,
          name: "Bottle",
          type: "jersey",
          href: "#",
          price: "$48",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        // More products...
      ],
    };
  },
  computed: {
    productsRender: function () {
      return this.products.filter((product) => product.type === this.ItemType);
    },
  },
};
</script>