<template>
  <div class="drop-down-list">
    <div class="select">
      <p
        :class="{
          select__title: true,
          'select__title--visible': areOptionsVisible,
        }"
        @click="areOptionsVisible = !areOptionsVisible"
      >
        {{ selectedOption }}
      </p>
      <div class="options" v-if="areOptionsVisible">
        <p
          class="options__item"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    selectedOption: {
      type: String,
      default: "",
    },
  },
  methods: {
    selectOption(option) {
      this.$emit("change", option);
      this.areOptionsVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 200px;
  position: relative;

  &__title {
    font-size: 16px;
    line-height: 24px;
    padding: 4px 6px 8px;
    border-bottom: 1px solid $gray4;
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      right: 6px;
      top: 14px;
      border: 6px solid transparent;
      transform: rotate(-90deg);
      border-right: 6px solid $gray1;
    }

    &:hover {
      color: $gray2;
    }

    &--visible::after {
      top: 10px;
      transform: rotate(90deg);
    }
  }
}

.options {
  position: absolute;
  background-color: $white;
  border: 1px solid $gray5;
  top: 37px;
  right: 0;
  width: 100%;
  z-index: 1;

  &__item {
    cursor: pointer;
    padding: 4px 6px 8px;

    &:hover {
      background-color: $gray5;
    }
  }
}
</style>
