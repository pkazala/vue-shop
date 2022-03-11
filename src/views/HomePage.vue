<template>
  <div class="divide-y divide-slate-10 w-screen">
    <HeaderElement></HeaderElement>
    <MainItems></MainItems>
  </div>
</template>

<script>
import HeaderElement from "@/components/HeaderElement.vue";
import MainItems from "@/components/MainItems.vue";

export default {
  props: ["app"],
  components: {
    HeaderElement,
    MainItems,
  },
};
</script>