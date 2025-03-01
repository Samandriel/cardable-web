//
<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="app-bar">
    <div class="app-bar-page-title">
      {{ route.meta.title }}
    </div>
    <div class="app-bar-menu-wrapper">
      <ShadNavigationMenu class="app-bar-menu-right">
        <ShadNavigationMenuList>
          <NavigationThemeToggle />
          <NavigationLanguageSelector />
          <NavigationNotification />
          <NavigationUserMenu />
        </ShadNavigationMenuList>
      </ShadNavigationMenu>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-bar {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--app-bar-border);
  height: var(--app-bar-height);
  .app-bar-page-title {
    font-weight: bold;
    white-space: nowrap;
  }
  .app-bar-menu-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    .app-bar-menu-right {
      margin-left: auto;
    }
  }
}
</style>
