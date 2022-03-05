<template>
  <section class="calculate-result">
    <div class="calculate-result__block">
      <output class="calculate-result__title">{{ pension }}</output>
      <div class="calculate-result__text">Пенсия в будущем</div>
    </div>
    <div class="tooltip tooltip--one" v-if="showTooltipOne">
      <p class="tooltip__text">
        Доход от размещения пенсионных резервов может как уменьшаться, так и
        увеличиваться в зависимости от рыночных условий и состояния фондовых
        рынков. Результаты размещения в прошлом не определяют доходов в будущем.
        Расчеты построены исходя из средней доходности Фонда за последние 3 года
        – 5%. Государство не гарантирует доходности размещения пенсионных
        резервов. Необходимо внимательно ознакомиться с Уставом Фонда и
        пенсионными правилами перед заключением пенсионного договора.
      </p>
    </div>
    <div class="tooltip tooltip--two" v-if="showTooltipTwo">
      <p class="tooltip__text">
        Доход от размещения пенсионных резервов может как уменьшаться, так и
        увеличиваться в зависимости от рыночных условий и состояния фондовых
        рынков. Результаты размещения в прошлом не определяют доходов в будущем.
        Расчеты построены исходя из средней доходности Фонда за последние 3 года
        – 5%. Государство не гарантирует доходности размещения пенсионных
        резервов. Необходимо внимательно ознакомиться с Уставом Фонда и
        пенсионными правилами перед заключением пенсионного договора.
      </p>
    </div>
    <div class="calculate-result__blocks">
      <div class="calculate-result__unit">
        <div class="calculate-result__group">
          <output
            class="calculate-result__title calculate-result__title--small"
          >
            {{ accumulated + " р." }}</output
          >
          <GuiTripleIcon
            @mouseover.native="showTooltipOne = true"
            @mouseout.native="showTooltipOne = false"
            icon="Info"
            dark
          />
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
          <GuiTripleIcon
            @mouseover.native="showTooltipTwo = true"
            @mouseout.native="showTooltipTwo = false"
            icon="Info"
            dark
          />
        </div>
        <div class="calculate-result__text">Размер соц. вычета</div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiTripleIcon from "../gui/GuiTripleIcon.vue";

export default {
  data() {
    return {
      showTooltipOne: false,
      showTooltipTwo: false,
    };
  },
  props: ["pension", "accumulated", "deduction"],
  components: { GuiTripleIcon },
};
</script>

<style lang="scss" scoped>
.calculate-result {
  display: flex;
  flex-direction: column;
  position: relative;

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

.tooltip {
  position: absolute;
  max-width: 400px;
  background-color: $white;
  padding: 12px;
  border: 1px solid rgba(184, 191, 199, 0.08);
  box-shadow: 0px 4px 6px #d2dce6;
  border-radius: 6px;

  transition: all 500ms ease;

  &--one {
    bottom: 200px;
  }

  &--two {
    bottom: 100px;
  }

  &__text {
    font-size: 13px;
    line-height: 20px;
    color: $gray3;
  }
}
</style>
