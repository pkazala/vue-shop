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
          h-[32rem]
          grid grid-cols-1
          lg:h-96 lg:grid-cols-2
          gap-4
          content-center
        "
      >
        <img
          :src="product.imageSrc"
          :alt="product.imageAlt"
          class="
            lg:w-[500px] lg:h-[500px]
            w-[400px]
            h-[400px]
            object-center object-cover
          "
        />
        <div class="m-8">
          <h3 class="text-lg font-semibold">{{ product.name }}</h3>
          <p class="text-xl mt-3 mb-7">${{ product.price }}</p>
          <Menu
            v-if="product.size.length > 0"
            as="div"
            class="relative inline-block text-left mr-4"
          >
            <div>
              <MenuButton
                class="
                  inline-flex
                  justify-center
                  w-20
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-sm
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                "
              >
                {{ current }}
                <ChevronDownIcon
                  class="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-20
                  rounded-md
                  shadow-lg
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <div
                  v-for="size in product.size"
                  v-bind:key="size.key"
                  v-on:click="current = size"
                  class="py-1 hover:bg-gray-100 cursor-pointer outline outline-1 outline-slate-100"
                >
                  <MenuItem>
                    <p
                      class="ml-4 font-thin"
                      >{{ size }}</p
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <a
            v-if="product.size.length > 0"
            v-bind:class="
              current != 'Size' ? '' : 'pointer-events-none opacity-50'
            "
            v-on:click="addToCart()"
            class="
              cursor-pointer
              text-white
              bg-amber-500
              rounded-lg
              p-3
              hover:bg-amber-600
              active:bg-amber-800
              transition-colors
              duration-200
            "
            >Add to cart</a
          >
          <a
            v-else
            v-on:click="addToCart()"
            class="
              cursor-pointer
              text-white
              bg-amber-500
              rounded-lg
              p-3
              hover:bg-amber-600
              active:bg-amber-800
              transition-colors
              duration-200
            "
            >Add to cart</a
          >
          <p class="mt-8 text-xl font-light w-72">{{ product.imageAlt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
export default {
  /*   components: {
    Menu,
  }, */
  data() {
    return {
      current: "Size",
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        product: this.product,
        size: this.current,
        quantity: 1,
      });
    },
    getSize(value) {
      console.log(value);
    },
  },
};
</script>
