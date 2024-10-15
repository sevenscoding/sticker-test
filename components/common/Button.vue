<template>
  <button :class="['icon-button', `icon-button--${color}`]" @click="$emit('click')">
    <slot name="icon" />
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'default',
  },
})
</script>

<style scoped>
.icon-button {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  transition: background-color 0.3s;
}

.icon-button--primary {
  background-color: var(--color-grey);
  color: var(--color-black);
  border: 1px solid var(--color-light-blue);
}

.icon-button--secondary {
  background-color: var(--color-red);
  color: var(--color-white);
}

.icon-button:hover {
  opacity: 0.9;
}
</style>