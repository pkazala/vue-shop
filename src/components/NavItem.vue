<template>
  <li>
    <router-link
      :to="href"
      :class="[
        'block px-3 py-2 rounded-md bg-slate-100 transition-colors duration-200 hover:bg-black hover:text-white',
      ]"
      v-on:click="$store.state.ItemType = 'all'"
    >
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
};
</script>