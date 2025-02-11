<script setup lang="ts">
const notebooks = [
  {
    id: 1,
    title: "Notebook 1",
    icon: "lucide:book",
  },
  {
    id: 2,
    title: "Notebook 2",
    icon: "lucide:book",
  },
  {
    id: 3,
    title: "Notebook 3",
    icon: "lucide:book",
  },
  {
    id: 4,
    title: "Notebook 4",
    icon: "lucide:book",
  },
  {
    id: 5,
    title: "Notebook 5",
    icon: "lucide:book",
  },
];

const notebookOrganizer = ref({
  userId: 1,
  collections: [
    {
      id: 1,
      name: "favorite",
      notebookIds: [1, 2],
      showList: true,
    },
  ],
});

const getNotebooksInCollection = (collectionId: number) => {
  const collection = notebookOrganizer.value.collections.find(
    (item) => item.id === collectionId
  );
  const notebooksInCollection = notebooks.filter((item) =>
    collection?.notebookIds.includes(item.id)
  );

  return notebooksInCollection;
};

const onClickCollection = (collectionId: number) => {
  const collection = notebookOrganizer.value.collections.find(
    (item) => item.id === collectionId
  );

  if (collection) {
    collection.showList = !collection.showList;
  }

  notebookOrganizer.value = {
    ...notebookOrganizer.value,
  };
};
</script>

<template>
  <ShadSidebarProvider :open="true" class="app-sidebar">
    <ShadSidebar>
      <ShadSidebarHeader class="app-sidebar-header">
        Langasus
      </ShadSidebarHeader>
      <ShadSidebarContent class="gap-0">
        <!-- New Notebook -->
        <ShadSidebarGroup class="app-sidebar-group py-4">
          <ShadSidebarGroupContent>
            <ShadButton class="w-full">
              <Icon name="lucide:book-plus" class="size-4" />
              {{ $t("appBar.button.newNotebook") }}
            </ShadButton>
          </ShadSidebarGroupContent>
        </ShadSidebarGroup>
        <ShadSidebarSeparator class="bg-border" />

        <!-- Collections -->
        <ShadSidebarGroup class="app-sidebar-group">
          <ShadSidebarGroupContent>
            <ShadSidebarGroupLabel class="app-sidebar-group-label">
              {{ $t("appBar.group.label.collections") }}
              <ShadSidebarMenuAction class="app-sidebar-action">
                <Icon name="lucide:ellipsis-vertical" class="size-4" />
              </ShadSidebarMenuAction>
            </ShadSidebarGroupLabel>
            <ShadSidebarMenu
              v-for="collection in notebookOrganizer.collections"
              :key="collection?.id"
            >
              <ShadSidebarMenuItem
                class="app-sidebar-menu-item"
                @click="onClickCollection(collection.id)"
              >
                <Icon
                  :name="
                    collection.showList ? 'lucide:folder-open' : 'lucide:folder'
                  "
                  class="size-4"
                />
                {{ collection?.name }}
                <ShadSidebarMenuAction class="app-sidebar-action" @click.stop>
                  <Icon name="lucide:ellipsis-vertical" class="size-4" />
                </ShadSidebarMenuAction>
              </ShadSidebarMenuItem>
              <ShadSidebarMenuSub
                v-if="collection.showList"
                class="app-sidebar-menu-sub"
              >
                <ShadSidebarMenuSubItem
                  v-for="notebook in getNotebooksInCollection(collection.id)"
                  :key="`${collection?.id}-${notebook.id}`"
                  class="app-sidebar-menu-sub-item"
                >
                  <Icon
                    :name="notebook?.icon || 'lucide:book'"
                    class="size-4"
                  />
                  {{ notebook?.title }}
                  <ShadSidebarMenuAction class="app-sidebar-action">
                    <Icon name="lucide:ellipsis-vertical" class="size-4" />
                  </ShadSidebarMenuAction>
                </ShadSidebarMenuSubItem>
              </ShadSidebarMenuSub>
            </ShadSidebarMenu>
          </ShadSidebarGroupContent>
        </ShadSidebarGroup>

        <!-- All Notebooks -->
        <ShadSidebarGroup class="app-sidebar-group">
          <ShadSidebarGroupContent>
            <ShadSidebarGroupLabel class="app-sidebar-group-label">
              {{ $t("appBar.group.label.allNotebooks") }}
              <ShadSidebarMenuAction class="app-sidebar-action">
                <Icon name="lucide:ellipsis-vertical" class="size-4" />
              </ShadSidebarMenuAction>
            </ShadSidebarGroupLabel>
            <ShadSidebarMenu>
              <ShadSidebarMenuItem
                v-for="notebook in notebooks"
                :key="notebook?.id"
                class="app-sidebar-menu-item"
              >
                <Icon :name="notebook?.icon || 'lucide:book'" class="size-4" />
                {{ notebook?.title }}
                <ShadSidebarMenuAction class="app-sidebar-action">
                  <Icon name="lucide:ellipsis-vertical" class="size-4" />
                </ShadSidebarMenuAction>
              </ShadSidebarMenuItem>
            </ShadSidebarMenu>
          </ShadSidebarGroupContent>
        </ShadSidebarGroup>
      </ShadSidebarContent>
    </ShadSidebar>
  </ShadSidebarProvider>
</template>

<style scoped lang="postcss">
.app-sidebar-header {
  justify-content: center;
  height: var(--app-bar-height);
  border-bottom: var(--app-bar-border);
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
  @apply p-1 gap-1;

  &:hover:not(.app-sidebar-group-label) {
    background: hsl(var(--muted));
  }
}

.app-sidebar-action {
  display: none;
}

.app-sidebar-group-label:hover .app-sidebar-action,
.app-sidebar-menu-sub-item:hover .app-sidebar-action,
.app-sidebar-menu-item:hover .app-sidebar-action {
  display: block;
}
</style>
