<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
const toggleTheme = () => {
  if (colorMode.value === "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
};
</script>

<template>
  <ShadNavigationMenuItem>
    <ShadSwitch :checked="isDark" @update:checked="toggleTheme">
      <template #thumb>
        <Icon v-if="isDark" name="lucide:moon" class="size-3" />
        <Icon v-else name="lucide:sun" class="size-3" />
      </template>
    </ShadSwitch>
  </ShadNavigationMenuItem>
</template>
