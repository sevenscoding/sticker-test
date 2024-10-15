<template>
  <section class="settings-page">
    <h1> Settings </h1>
    <CommonAddItemBlock @add-sticker="addSticker" />
    <ul>
      <li v-for="sticker in stickers" :key="sticker.id">
        <SettingSticker
            :sticker="sticker"
            @remove="removeSticker(sticker.id)"
            @save="saveEdit"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
const { stickers, addSticker, removeSticker, saveEdit } = useStickers()
</script>

<style scoped>
.settings-page {
  padding: 20px;
}
input {
  margin-right: 10px;
}
</style>
