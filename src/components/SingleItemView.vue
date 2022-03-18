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
          <Menu as="div" class="relative inline-block text-left mr-4">
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
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-100
                  focus:ring-indigo-500
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
                  w-28
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
                  class="py-1"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      v-on:click="current = size"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >{{ size }}</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <a
            v-bind:class="current != 'Size' ? '':'pointer-events-none opacity-50'"
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
//import Menu from "@/components/DropdownMenu.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
export default {
  /*   components: {
    Menu,
  }, */
  data() {
    return {
      //product: this.$store.getters.product(this.$route.params.id),
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
      this.$store.dispatch("addToCart", {id: this.$route.params.id, size: this.current});
    },
    getSize(value) {
      console.log(value);
    },
  },
};
</script>
