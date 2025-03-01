<script setup lang="ts">
import { Input } from "@/components/ui/input";
</script>

<template>
  <div class="search-input-wrapper">
    <Input id="search" type="text" placeholder="Search..." class="pl-10" />
    <span class="search-icon">
      <Icon name="lucide:search" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.search-input-wrapper {
  position: relative;
  width: 100%;
  margin: auto;
  .search-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
    display: flex;
    align-items: center;
  }
}
</style>
