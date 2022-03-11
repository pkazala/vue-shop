<template>
  <li>
    <a
      :href="href"
      :class="['block px-3 py-2 rounded-md bg-slate-100 transition-colors duration-200 hover:bg-black hover:text-white']"
    >
      <slot></slot>
    </a>
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
  }
</script>