//
<script setup lang="ts"></script>

<template>
  <div class="app-bar">
    <div class="app-bar-menu-wrapper">
      <div class="app-bar-menu-left">
        <!--  -->
      </div>

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
  .app-bar-menu-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
