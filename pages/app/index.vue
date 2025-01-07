<script setup lang="ts">
definePageMeta({
  layout: "app",
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <h1>app page</h1>
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
