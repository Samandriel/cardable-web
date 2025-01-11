//
<script setup lang="ts"></script>

<template>
  <div class="app-bar">
    <NuxtLink to="/app" class="app-bar-logo">
      <h1>Langasus</h1>
    </NuxtLink>
    <div class="app-bar-menu-wrapper">
      <div class="app-bar-menu-left">
        <!--  -->
      </div>

      <ShadNavigationMenu class="app-bar-menu-right">
        <ShadNavigationMenuList>
          <NavigationThemeToggle />
          <NavigationLanguageSelector />
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
  /* background: var(--background); */
}
</style>
