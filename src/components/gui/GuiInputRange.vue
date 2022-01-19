<template>
  <div class="input">
    <div class="input__group">
      <div class="input__label">{{ label }}</div>
      <output class="input__value">{{ value }}</output>
    </div>

    <div class="input__strape" :style="{ width: `${strapeWidth}%` }"></div>
    <input
      class="input__range"
      @input="handleInputChange"
      type="range"
      :value="value"
      :min="min"
      :max="max"
      :step="step"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  computed: {
    strapeWidth() {
      return ((this.value - this.min) * 100) / (this.max - this.min);
    },
  },
  methods: {
    handleInputChange(event) {
      this.$emit("myInput", Number(event.target.value));
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  position: relative;
  margin-bottom: 24px;

  &__label {
    font-size: 13px;
    line-height: 24px;
    color: #b5bdc8;
  }

  &__value {
    font-size: 18px;
    line-height: 24px;
  }

  &__group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  &__strape {
    height: 4px;
    position: absolute;
    bottom: 1.5px;
    background-color: #cedc01;
  }

  &__range {
    background: #b5bdc8;
    -webkit-appearance: none;
    width: 100%;
    height: 1px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: white;
      cursor: pointer;
      box-shadow: 0px 4px 6px rgba(26, 65, 101, 0.15);
      position: relative;
    }
  }
}
</style>
