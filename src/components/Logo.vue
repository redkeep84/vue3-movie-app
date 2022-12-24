<template>
  <RouterLink 
    to="/" 
    class="log">
    <span>OMDbAPI</span>.com
  </RouterLink>
</template>

<style lang="scss" scoped>

.log {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>