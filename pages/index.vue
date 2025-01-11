<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div>
    <p>{{ $t("hello") }}</p>
    <NuxtLink :to="localePath('/app')">Go to app</NuxtLink>
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
