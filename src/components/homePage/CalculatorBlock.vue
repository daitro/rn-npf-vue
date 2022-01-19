<template>
  <section class="calculator-block">
    <div class="calculator-block__container">
      <h3 class="calculator-block__caption">Калькулятор</h3>
      <h1 class="title title--black">Рассчитайте будущую пенсию</h1>
      <div class="row">
        <div class="col-sm-6 col-md-5">
          <div class="gender-age-block">
            <GuiRadioButton
              :choosedButtonValue="choosedButtonValue"
              :name="name"
              :radioButtons="radioButtons"
              @myChange="choosedButtonValue = $event"
            ></GuiRadioButton>

            <GuiInputRange
              :value="age.value"
              :label="age.label"
              :min="age.min"
              :max="age.max"
              :step="age.step"
              @myInput="ageHandler"
            />
          </div>

          <GuiInputRange
            :value="initialFee.value"
            :label="initialFee.label"
            :min="initialFee.min"
            :max="initialFee.max"
            :step="initialFee.step"
            @myInput="initialFee.value = $event"
          />

          <GuiInputRange
            :value="monthlyFee.value"
            :label="monthlyFee.label"
            :min="monthlyFee.min"
            :max="monthlyFee.max"
            :step="monthlyFee.step"
            @myInput="monthlyFee.value = $event"
          />

          <GuiInputRange
            :value="dueDate.value"
            :label="dueDate.label"
            :min="dueDate.min"
            :max="dueDate.max"
            :step="dueDate.step"
            @myInput="dueDate.value = $event"
          />
        </div>
        <div class="offset-sm-0 offset-md-1"></div>
        <div class="col-sm-6 col-md-6">
          <CalculateResult
            :pension="pension"
            :accumulated="accumulated"
            :deduction="deduction"
          ></CalculateResult>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiRadioButton from "../gui/GuiRadioButton.vue";
import GuiInputRange from "../gui/GuiInputRange.vue";
import CalculateResult from "./CalculateResult.vue";

export default {
  data() {
    return {
      age: {
        value: 40,
        label: "Возраст, лет",
        min: 30,
        max: 80,
        step: 1,
      },
      initialFee: {
        value: 500000,
        label: "Первоначальный взнос, р.",
        min: 30000,
        max: 1000000,
        step: 1000,
      },
      monthlyFee: {
        value: 100000,
        label: "Ежемесячный взнос, р.",
        min: 1000,
        max: 500000,
        step: 1000,
      },
      dueDate: {
        value: 20,
        label: "Срок выплаты пенсии, лет",
        min: 5,
        max: 30,
        step: 1,
      },
      choosedButtonValue: "female",
      name: "gender",
      radioButtons: [
        {
          value: "female",
          label: "Ж",
        },
        {
          value: "male",
          label: "М",
        },
      ],
    };
  },
  computed: {
    pension: function () {
      if (this.choosedButtonValue === "male") {
        return (
          Math.round(
            (Number(this.initialFee.value) +
              Number(this.monthlyFee.value) *
                12 *
                (60 - Number(this.age.value))) /
              (12 * Number(this.dueDate.value))
          ) * 2
        );
      } else {
        return Math.round(
          (Number(this.initialFee.value) +
            Number(this.monthlyFee.value) *
              12 *
              (60 - Number(this.age.value))) /
            (12 * Number(this.dueDate.value))
        );
      }
    },
    accumulated: function () {
      return Math.round(
        Number(this.initialFee.value) +
          Number(this.monthlyFee.value) * 12 * (60 - Number(this.age.value))
      );
    },
    deduction: function () {
      return Math.round(
        ((Number(this.initialFee.value) +
          Number(this.monthlyFee.value) * 12 * (60 - Number(this.age.value))) /
          (12 * Number(this.dueDate.value)) /
          100) *
          13 *
          12 *
          Number(this.dueDate.value)
      );
    },
  },
  components: {
    GuiRadioButton,
    GuiInputRange,
    CalculateResult,
  },
  methods: {
    ageHandler(event) {
      this.age.value = event;
    },
  },
};
</script>

<style lang="scss" scoped>
.calculator-block {
  &__container {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px;
  }

  &__caption {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 24px;
  }
}

.gender-age-block {
  display: flex;
}
</style>
