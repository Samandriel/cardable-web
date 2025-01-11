<script setup lang="ts">
const notifications = [
  { id: 1, message: "New message received" },
  { id: 2, message: "Your report is ready" },
  { id: 3, message: "Meeting in 30 minutes" },
];
</script>

<template>
  <ShadNavigationMenuItem>
    <ShadPopover>
      <ShadPopoverTrigger> Notifications </ShadPopoverTrigger>
      <ShadPopoverContent>
        <ShadCommand>
          <ShadCommandList>
            <ShadCommandItem
              v-for="notification in notifications"
              :key="notification.id"
              :value="`notification-id_${notification.id}`"
            >
              {{ notification.message }}
            </ShadCommandItem>
          </ShadCommandList>
        </ShadCommand>
      </ShadPopoverContent>
    </ShadPopover>
  </ShadNavigationMenuItem>
</template>
