<template>
  <button
    :class="{
      'button-primary': true,
    }"
    :disabled="disabled"
  >
    Оформить заявку
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
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
    background-color: #326e96;
  }

  &[disabled] {
    background-color: $gray3;
  }
}
</style>
