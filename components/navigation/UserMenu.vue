<script lang="ts" setup></script>

<template>
  <ShadNavigationMenuItem>
    <ClientOnly>
      <ShadPopover>
        <ShadPopoverTrigger>
          <Icon name="lucide:user" class="size-3" />
        </ShadPopoverTrigger>
        <ShadPopoverContent>
          <ShadCommand>
            <ShadCommandList>
              <ShadCommandItem value="profile">Profile</ShadCommandItem>
              <ShadCommandItem value="logout">Logout</ShadCommandItem>
            </ShadCommandList>
          </ShadCommand>
        </ShadPopoverContent>
      </ShadPopover>
    </ClientOnly>
  </ShadNavigationMenuItem>
</template>
