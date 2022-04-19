<template>
  <img
    @mouseover="isLocalHovered = true"
    @mouseout="isLocalHovered = false"
    @click="$emit('click')"
    class="triple-icon"
    :class="{ 'triple-icon--disabled': disabled === true }"
    :src="imgUrl"
    :alt="icon"
  />
</template>

<script>
export default {
  name: "TripleIcon",
  data() {
    return {
      isLocalHovered: false,
    };
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    light: {
      type: Boolean,
      default: false,
    },
    hovered: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgUrl() {
      let state = this.light ? "Light" : "Dark";

      if (this.static || this.disabled) {
        this.isLocalHovered = false;
      }

      if (this.isLocalHovered || this.hovered) state = "Colored";

      return `/icons/triple/${this.icon}/${state}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.triple-icon {
  cursor: pointer;
  height: 24px;
  width: 24px;

  &--disabled {
    opacity: 50%;
    cursor: auto;
  }
}
</style>
