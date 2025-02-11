<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <div class="app-layout-sidebar">
      <AppSidebar />
    </div>
    <div class="app-layout-main">
      <AppBar />
      <div class="app-layout-main-content">
        <div class="app-layout-main-content-scrollable">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";

.app-layout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  .app-layout-sidebar {
    z-index: 100;
  }
  &-main {
    z-index: 99;
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &-content {
      position: relative;
      height: calc(100vh - var(--app-bar-height));
      overflow: hidden;
      &-scrollable {
        height: inherit;
        padding: 2rem;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
}
</style>
