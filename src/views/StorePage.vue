<template>
  <div class="divide-y divide-slate-10 w-screen">
    <ShopNavigation>
      <StoreNavItem href="/store">Jerseys</StoreNavItem>
      <StoreNavItem href="/store">Apparel</StoreNavItem>
      <StoreNavItem href="/store">Accesories</StoreNavItem>
    </ShopNavigation>
    <StoreItems></StoreItems>
  </div>
</template>

<script>
import StoreItems from "@/components/StoreItems.vue";
import ShopNavigation from "@/components/ShopNavigation.vue";
import StoreNavItem from "@/components/StoreNavItem.vue";

export default {
  props: ["app"],
  components: {
    StoreItems,
    ShopNavigation,
    StoreNavItem,
  },
};
</script>