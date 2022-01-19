<template>
  <div class="radio-buttons">
    <!-- В key биндим button.value потому что он для каждой кнопки будет разный
      В случаях, когда в объекте или элементе массива нет индивидуального значения
      мы биндим index.
     -->
    <label
      class="radio-button"
      v-for="button in radioButtons"
      :key="button.value"
    >
      <input
        class="radio-button__input"
        type="radio"
        :name="name"
        :value="button.value"
        @change="onButtonInput"
      />
      <div
        :class="{
          'radio-button__label': true,
          'radio-button__label--is-active': button.value === choosedButtonValue,
        }"
      >
        {{ button.label }}
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["choosedButtonValue", "name", "radioButtons"],
  methods: {
    onButtonInput(event) {
      this.$emit("myChange", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-buttons {
  display: flex;
}

.radio-button {
  &__input {
    display: none;
  }

  &__label {
    padding: 12px 24px 14px;
    line-height: 24px;
    font-size: 16px;
    color: white;
    background-color: #b5bdc8;
    border-radius: 24px;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.22s;

    &:hover {
      opacity: 0.9;
    }

    &--is-active {
      background-color: #50287d;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
