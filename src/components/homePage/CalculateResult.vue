<template>
  <div class="calculate-result">
    <div class="calculate-result__block">
      <output class="calculate-result__title">{{ pension }}</output>
      <div class="calculate-result__text">Пенсия в будущем</div>
    </div>
    <div class="calculate-result__blocks">
      <div class="calculate-result__unit">
        <div class="calculate-result__group">
          <output
            class="calculate-result__title calculate-result__title--small"
          >
            {{ accumulated + " р." }}</output
          >
          <GuiTripleIcon icon="Info" dark />
        </div>
        <div class="calculate-result__text">Накоплено</div>
      </div>
      <div class="calculate-result__line-gray"></div>
      <div class="calculate-result__unit">
        <div class="calculate-result__group">
          <output
            class="calculate-result__title calculate-result__title--small"
            >{{ deduction + " р." }}</output
          >
          <GuiTripleIcon icon="Info" dark />
        </div>
        <div class="calculate-result__text">Размер соц. вычета</div>
      </div>
    </div>
  </div>
</template>

<script>
import GuiTripleIcon from "../gui/GuiTripleIcon.vue";

export default {
  props: ["pension", "accumulated", "deduction"],
  components: { GuiTripleIcon },
};
</script>

<style lang="scss" scoped>
.calculate-result {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }

  &__block {
    border: 1px solid $gray5;
    min-width: 166px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 24px;

    @media screen and (min-width: 992px) {
      margin-bottom: 0;
    }
  }

  &__blocks {
    border: 1px solid $gray5;
    width: 100%;
    padding: 24px;
    margin-left: 0;

    @media screen and (min-width: 992px) {
      margin-left: 24px;
    }
  }

  &__group {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;

    &--small {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__text {
    font-size: 13px;
    font-weight: 500;
    line-height: 24px;
    color: $gray1;
  }

  &__line-gray {
    border-bottom: 1px solid $gray5;
    margin: 36px 0 24px;
  }
}
</style>
