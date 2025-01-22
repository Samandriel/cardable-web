<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <div class="app-layout-sidebar">
      <AppSidebar />
    </div>
    <div class="app-layout-main">
      <AppBar />
      <div class="app-layout-main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;
  grid-template-columns: var(--sidebar-width) 1fr;
  &-main {
    flex-grow: 1;
    width: 100%;
    &-content {
      height: calc(100dvh - var(--app-bar-height));
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
}
</style>
