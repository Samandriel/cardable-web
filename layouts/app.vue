<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <div class="app-layout-sidebar">
      <AppSidebar />
    </div>
    <div class="app-layout-content">
      <AppBar />
      <p>{{ $t("hello") }}</p>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;
  grid-template-columns: var(--sidebar-width) 1fr;

  &-content {
    flex-grow: 1;
    width: 100%;
  }
}
</style>
