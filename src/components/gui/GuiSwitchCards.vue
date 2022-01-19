<template>
  <div class="radio-button">
    <label
      :class="{
        'radio-button__label': true,
        'radio-button__label--is-active': value === choosedButtonValue,
      }"
      @mouseover="isLoginButtonHovered = true"
      @mouseout="isLoginButtonHovered = false"
    >
      <input
        class="radio-button__input"
        :name="name"
        type="radio"
        :value="value"
        @change="clickOnButton"
      />
      <GuiTripleIcon
        class="radio-button__icon"
        :icon="icon"
        dark
        :hovered="isLoginButtonHovered || value === choosedButtonValue"
      />
      <div class="radio-button__text">{{ text }}</div>
    </label>
  </div>
</template>

<script>
import GuiTripleIcon from "./GuiTripleIcon.vue";

export default {
  data() {
    return {
      isLoginButtonHovered: false,
    };
  },
  methods: {
    clickOnButton(event) {
      this.$emit("changeButton", event.target.value);
    },
  },
  props: ["choosedButtonValue", "name", "value", "icon", "text"],
  components: {
    GuiTripleIcon,
  },
};
</script>

<style lang="scss" scoped>
.radio-button {
  &__input {
    display: none;
  }

  &__label {
    display: flex;
    padding: 36px 24px;
    border: 1px solid #e4e6e8;
    margin-right: 24px;
    margin-bottom: 24px;
    cursor: pointer;
    transition: box-shadow 0.3s, width 0.3s, height 0.3s, top 0.3s, left 0.3s;

    @media screen and (min-width: 768px) {
      margin-right: 0;
    }

    &--is-active {
      width: 100%;
      max-width: 276px;
      padding: 42px 34px;
      border: 1px solid rgba(184, 191, 199, 0.08);
      box-shadow: 0px 4px 6px #d2dce6;
      border-radius: 6px;
    }
  }

  &__text {
    font-size: 13px;
    line-height: 24px;
    width: 102px;
    color: #5a646e;
    margin-left: 48px;
  }
}
</style>
