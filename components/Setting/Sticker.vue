<template>
  <div class="sticker">
    <div class="sticker__edit-panel" v-if="isEditing">
      <input v-model="stickerCopy.text" maxlength="100"/>
      <div class="sticker__block">
        <CommonButton :text="BUTTONS_TEXT.SAVE"  @click="saveEdit" />
        <CommonButton :text="BUTTONS_TEXT.CANCEL" color="secondary" @click="cancelEdit" />
      </div>
    </div>
    <div v-else>
      <p class="sticker__text">{{ stickerCopy.text }}</p>
      <SettingPanel @edit="startEdit" @remove="emit('remove', sticker.id)" />
    </div>
  </div>
</template>

<script setup>
import { BUTTONS_TEXT } from "~/constants/common/";

const emit = defineEmits(['save', 'remove'])

const props = defineProps({
  sticker: {
    type: Object,
    required: false,
    default: () => null,
  },
})

const isEditing = ref(false)
const stickerCopy = ref({})

watch(
    () => props.sticker,
    (newVal) => {
      stickerCopy.value = newVal ? { ...newVal } : {}
    },
    { immediate: true }
)

const startEdit = () => {
  isEditing.value = true
}

const saveEdit = () => {
  emit('save', stickerCopy.value)
  isEditing.value = false
}

const cancelEdit = () => {
  isEditing.value = false
  stickerCopy.value = {...props.sticker}
}
</script>

<style lang="scss" scoped>
.sticker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-light-blue);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: var(--border-radius-base);

  &__text {
    margin-bottom: 10px;
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__edit-panel {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;
  }
}
</style>