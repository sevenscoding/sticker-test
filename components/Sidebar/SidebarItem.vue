<template>
  <nuxt-link :to="item.route" class="menu-item" :class="{ active: isActiveRoute }">
    <i :class="`mdi ${item.icon}`"></i>
    <span>{{ item.name }}</span>
  </nuxt-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const route = useRoute()

// Определение, является ли текущий маршрут активным
const isActiveRoute = computed(() => route.path === props.item.route)
</script>

<style scoped>
.menu-item {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-item.active {
  background-color: #f0f0f0;
}

.menu-item i {
  margin-right: 15px;
}

.menu-item:hover {
  background-color: #e5e5e5;
}
</style>