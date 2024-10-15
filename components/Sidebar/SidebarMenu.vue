<template>
  <nav>
    <ul class>
      <li
          v-for="(item, index) in items"
          :key="index"
      >
        <CommonNavLink :href="item.href" :text="item.text">
          <template #icon>
            <component :is="item.icon" />
          </template>
        </CommonNavLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>