<template>
  <div>
    <form action="http://localhost:5000/create-checkout-session" method="POST">
    <button v-on:click="localStorage.removeItem('cart')">CLICK</button>
    </form>
  </div>
</template>

<script>

</script>