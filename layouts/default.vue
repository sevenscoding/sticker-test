<template>
  <div class="layout">
    <Sidebar />
    <main class="content">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 250px;
}
</style>