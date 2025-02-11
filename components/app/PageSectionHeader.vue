<script setup lang="ts">
//
</script>

<template>
  <div class="page-section-header">
    <div class="page-section-header__left">
      <div class="page-section-header__title">
        <slot />
      </div>
    </div>
    <div class="page-section-header__right">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-section-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @apply mb-5;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: hsl(var(--border));
  }
}
.page-section-header__title {
  margin-bottom: 0.25rem;
  @apply text-xl font-semibold;
}
</style>
