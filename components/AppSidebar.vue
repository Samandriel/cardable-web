<script setup lang="ts">
const menuItems = [
  {
    title: "Home",
    icon: "lucide:home",
    url: "/app",
  },
  {
    title: "Library",
    icon: "lucide:gallery-horizontal-end",
    url: "/app/library",
  },
  {
    title: "Collections",
    icon: "lucide:book-copy",
    url: "/app/collections",
  },
];
</script>

<template>
  <ShadSidebarProvider :open="true" class="app-sidebar">
    <ShadSidebar>
      <ShadSidebarHeader class="app-sidebar-header">
        <div class="brand-logo">
          <Icon name="material-symbols:stacks-outline-rounded" class="size-6" />
          Cardable
        </div>
      </ShadSidebarHeader>
      <ShadSidebarContent class="gap-0">
        <!-- New Notebook -->
        <ShadSidebarGroup class="app-sidebar-group py-4">
          <ShadSidebarGroupContent>
            <NuxtLink to="/app/new-flashcard">
              <ShadButton class="w-full">
                <Icon name="lucide:book-plus" class="size-4" />
                {{ $t("appBar.button.newFlashcard") }}
              </ShadButton>
            </NuxtLink>
          </ShadSidebarGroupContent>
        </ShadSidebarGroup>
        <ShadSidebarSeparator class="bg-border" />

        <ShadSidebarGroup class="app-sidebar-group">
          <ShadSidebarGroupContent>
            <!-- <ShadSidebarGroupLabel class="app-sidebar-group-label">
              {{ $t("appBar.group.label.library") }}
            </ShadSidebarGroupLabel> -->
            <ShadSidebarMenu>
              <ShadSidebarMenuItem
                v-for="menu in menuItems"
                :key="menu.title"
                class="app-sidebar-menu-item"
                :class="{ 'is-active': menu.url === $route.path }"
              >
                <ShadSidebarMenuButton as-child>
                  <!-- :is-active="menu.url === $route.path"
                  class="app-sidebar-menu-button" -->
                  <NuxtLink :to="menu.url">
                    <Icon :name="menu.icon" class="size-6" />
                    {{ menu.title }}
                  </NuxtLink>
                </ShadSidebarMenuButton>

                <!-- <ShadSidebarMenuAction>
                    <Icon name="lucide:chevron-right" class="size-4" />
                  </ShadSidebarMenuAction> -->
              </ShadSidebarMenuItem>
            </ShadSidebarMenu>
          </ShadSidebarGroupContent>
        </ShadSidebarGroup>
      </ShadSidebarContent>

      <!-- <ShadSidebarFooter class="app-sidebar-footer">
        <ShadSidebarSeparator class="bg-border" />
      </ShadSidebarFooter> -->
    </ShadSidebar>
  </ShadSidebarProvider>
</template>

<style scoped lang="postcss">
.app-sidebar-header {
  justify-content: center;
  height: var(--app-bar-height);
  border-bottom: var(--app-bar-border);
  .brand-logo {
    margin: auto;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    font-family: Gelasio, serif;
    font-weight: 700;
    /* font-style: italic; */
    font-size: 1.5rem;
    text-align: center;
  }
}
.app-sidebar-group {
  @apply px-4;
}
.app-sidebar-group-label {
  @apply px-0;
}
.app-sidebar-menu-sub {
  @apply mx-0;
}

.app-sidebar-group-label,
.app-sidebar-menu-sub-item,
.app-sidebar-menu-item {
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  background: none;
  transition: all 0.2s ease-in-out;
  border-radius: var(--radius);
  @apply p-1 gap-2;
  &.is-active,
  &:hover:not(.app-sidebar-group-label) {
    background: hsl(var(--muted));
  }
}

/* .app-sidebar-action {
  display: none;
} */

/* .app-sidebar-group-label:hover .app-sidebar-action,
.app-sidebar-menu-sub-item:hover .app-sidebar-action,
.app-sidebar-menu-item:hover .app-sidebar-action {
  display: block;
} */
</style>
