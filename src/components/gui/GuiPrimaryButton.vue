<template>
  <button class="button-primary">Оформить заявку</button>
</template>

<script>
export default {};
</script>

<style lang="scss">
.button-primary {
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: $white;
  padding: 12px 18px;
  background-color: $primary;
  border-radius: 24px;
  max-width: 200px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #632fb6;
  }
}
</style>
