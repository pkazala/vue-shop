<template>
  <div class="divide-y divide-slate-10 w-screen">
    <StoreItems></StoreItems>
  </div>
</template>

<script>
import StoreItems from "@/components/StoreItems.vue";

export default {
  props: ["app"],
  components: {
    StoreItems,
  },
};
</script>