<script setup lang="ts">
import { BUTTONS_TEXT } from "~/constants/common";

const emit = defineEmits(['edit', 'remove'])
</script>

<template>
<div class="settings-panel">
  <CommonButton :text="BUTTONS_TEXT.EDIT" color="primary" @click="emit('edit')">
    <template #icon>
      <IconEdit />
    </template>
  </CommonButton>
  <CommonButton :text="BUTTONS_TEXT.REMOVE" color="secondary" @click="emit('remove')">
    <template #icon>
      <IconRemove />
    </template>
  </CommonButton>
</div>
</template>

<style scoped>
.settings-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>