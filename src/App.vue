<template>
  <div class="divide-y divide-slate-10 w-screen">
    <NavigationBar>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/store">Shop</NavItem>
      <NavItem href="/auth">Sign in</NavItem>
    </NavigationBar>
  </div>
  <hr class="solid">
  <router-view />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import NavItem from "@/components/NavItem.vue";

export default {
  props: ["app"],
  components: {
    NavigationBar,
    NavItem,
  },
  mounted() {
    this.$store.dispatch('getProducts');
  }
};
</script>