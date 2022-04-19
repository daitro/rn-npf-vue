<template>
  <img :src="imgUrl" :alt="logotype" class="logo" />
</template>

<script>
export default {
  props: {
    logotype: {
      type: String,
      required: true,
    },
    light: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgUrl() {
      let state = this.light ? "Light" : "Color";

      return `/logotype/${this.logotype}/${state}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
</style>
