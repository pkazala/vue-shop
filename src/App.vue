<template>
  <div class="divide-y divide-slate-10 w-screen">
    <NavigationBar>
      <NavItem href="/store">Shop</NavItem>
      <NavItem v-if="this.$store.state.jwt === ''" href="/auth"
        >Sign in</NavItem
      >
      <button
        v-else
        v-on:click="signOut()"
        class="
          [
          'block
          px-3
          py-2
          rounded-md
          font-medium
          bg-slate-100
          transition-colors
          duration-200
          hover:text-white
          hover:bg-black hover:text-white',
          ]
        "
      >
        Sign out
      </button>
    </NavigationBar>
  </div>
  <hr class="solid" />
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
    this.$store.dispatch("getProducts");
    this.$store.dispatch("loadCart");
    this.$store.dispatch("loadJWT");
  },
  methods: {
    signOut() {
      localStorage.setItem('token', '')
      window.location.reload()
    }
  }
};
</script>