<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <router-link class="sidebar__logo-link" :to="ROUTER_PATH.HOME">
        <CommonLogo />
      </router-link>
    </div>
    <SidebarMenu class="sidebar__menu" :items="MENU_ITEMS" />
  </aside>
</template>

<script setup>
import { ROUTER_PATH, MENU_ITEMS } from "~/constants/common/";
</script>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: var(--color-dark-blue);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    margin-top: 30px;
  }

  &__menu {
    margin-top: 50px;
  }
}
</style>