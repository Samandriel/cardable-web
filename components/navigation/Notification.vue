<script setup lang="ts">

const notifications = [
  { id: 1, message: 'New message received' },
  { id: 2, message: 'Your report is ready' },
  { id: 3, message: 'Meeting in 30 minutes' },
]

</script>

<template>
  <ShadNavigationMenuItem>
    <ShadPopover>
      <ShadPopoverTrigger>
        Notifications
      </ShadPopoverTrigger>
      <ShadPopoverContent>
        <ul>
          <li v-for="notification in notifications" :key="notification.id">
            {{ notification.message }}
          </li>
        </ul>
      </ShadPopoverContent>
    </ShadPopover>
  </ShadNavigationMenuItem>
</template>