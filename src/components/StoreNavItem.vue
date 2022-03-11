<template>
  <li>
    <a
      :href="href"
      :class="['block px-3 py-2 transition-colors duration-200 hover:text-stone-400']"
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