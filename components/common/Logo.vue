<template>
  <div class="logo">
    <nuxt-link to="/">
      <IconSticker />
      Stickr.
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 140px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-style: italic;
  font-size: var(--font-size-title);
  a {
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    text-decoration: none;
  }
  svg {
    fill: var(--color-prime);
  }
}
</style>