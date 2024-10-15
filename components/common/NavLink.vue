<template>
  <router-link :to="href" class="nav-link">
    <slot name="icon" />
    <span class="nav-text">{{ text }}</span>
  </router-link>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  font-weight: 500;
  transition: color .25s ease-in-out;

  &.router-link-active {
    color: var(--color-prime);
  }
}
</style>
