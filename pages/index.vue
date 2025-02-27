<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div>
    <p>{{ $t("hello") }}</p>
    <NuxtLink :to="localePath('/app/flashcard')">Go to app</NuxtLink>
  </div>
</template>

<style lang="scss"></style>
