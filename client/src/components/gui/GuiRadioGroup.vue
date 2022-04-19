<template>
  <div class="radio-group">
    <div class="radio-group__tabs">
      <label
        :class="{
          tab: true,
          'tab--active': item.value === value,
        }"
        v-for="(item, index) in radioGroupYears"
        :key="index"
      >
        {{ item.label }}
        <input
          :name="name"
          :value="item.value"
          class="tab__input"
          type="radio"
          @change="onChange"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    radioGroupYears: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-group {
  margin-bottom: 24px;
  &__tabs {
    background-color: $bg-gray;
    padding: 12px 4px 10px;
    border-radius: 28px;
    width: fit-content;

    @media screen and(min-width: 576px) {
      padding: 16px 4px 18px;
    }
  }
}

.tab {
  font-size: 14px;
  line-height: 36px;
  border-radius: 28px;
  padding: 10px 12px 12px;
  margin-bottom: 12px;
  color: $gray1;
  cursor: pointer;

  @media screen and(min-width: 576px) {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 16px 14px;
  }

  &--active {
    background-color: $primary;
    border-radius: 28px;
    color: $white;
  }

  &__input {
    display: none;
  }
}
</style>
