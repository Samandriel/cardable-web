<script setup lang="ts"></script>

<template>
  <div>
    <AppBar />
    <p>{{ $t("hello") }}</p>
    <slot />
  </div>
</template>
