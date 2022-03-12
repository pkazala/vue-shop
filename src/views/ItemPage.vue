<template>
  <div class="divide-y divide-slate-10 w-screen">
    <SingleItemView></SingleItemView>
  </div>
</template>

<script>
import SingleItemView from "@/components/SingleItemView.vue";

export default {
  props: ["app"],
  components: {
    SingleItemView,
  },
};
</script>