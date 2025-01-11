<script setup lang="ts">
const colorMode = useColorMode();
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
    <button class="p-2 rounded-full hover:bg-gray-200" @click="toggleTheme">
      <span v-if="colorMode.value === 'dark'"> dark </span>
      <span v-else> light </span>
    </button>
  </ShadNavigationMenuItem>
</template>
