<script setup lang="ts">
const { setLocale } = useI18n();

setLocale("th");
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <h2>สวัสดี</h2>
    <p>{{ $t("hello") }}</p>
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
