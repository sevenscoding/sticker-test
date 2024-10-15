<template>
  <div class="sticker-input">
    <input
        v-model="stickerText"
        placeholder="Введите текст стикера"
        @keyup.enter="emitAddSticker"
    />
    <button @click="emitAddSticker">Add</button>
  </div>
</template>

<script setup>
const stickerText = ref('')
const emit = defineEmits(['add-sticker'])

const emitAddSticker = () => {
  if (stickerText.value.trim()) {
    emit('add-sticker', stickerText.value)
    stickerText.value = ''
  }
}
</script>

<style scoped>
.sticker-input {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}
</style>