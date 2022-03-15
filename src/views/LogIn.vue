<template>
  <div>
    <input v-model="params.name" class="bg-amber-100"/>
    <input v-model="params.email" class="bg-amber-100"/>
    <button @click="request">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {},
    };
  },
  methods: {
    request() {
      this.axios
        .post("http://localhost:5000/", this.params)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
};
</script>