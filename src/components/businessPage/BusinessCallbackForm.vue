<template>
  <section class="application-form">
    <div class="application-form__container">
      <h3 class="application-form__caption">Свяжитесь с нами</h3>
      <h1 class="application-form__header">
        Наши специалисты по корпоративным программам помогут составить
        персональную программу для сотрудников вашей компании.
      </h1>
      <div class="application-form__controls-block">
        <GuiInput
          :label="number.label"
          v-model="number.value"
          :id="number.id"
          :hasError="number.hasError"
          :textError="number.textError"
          @blur="phoneCheck"
        />
        <GuiInput
          :label="name.label"
          :value="name.value"
          :id="name.id"
          @input="name.value = $event"
        />
        <GuiInput
          :label="mail.label"
          :value="mail.value"
          :id="mail.id"
          :hasError="mail.hasError"
          :textError="mail.textError"
          @blur="mailCheck"
          @input="mail.value = $event"
        />
        <GuiInput
          :label="company.label"
          :value="company.value"
          :id="company.id"
          @input="company.value = $event"
        />
      </div>
      <button class="button-primary">Оформить заявку</button>
    </div>
  </section>
</template>

<script>
import GuiInput from "../gui/GuiInput.vue";

export default {
  data() {
    return {
      number: {
        label: "Телефон",
        value: "",
        id: "number",
        hasError: false,
        textError: "Пожалуйста, введите корректный номер телефона",
      },
      name: {
        label: "Как вас зовут",
        value: "",
        id: "name",
      },
      mail: {
        label: "Электронная почта",
        value: "",
        id: "mail",
        hasError: false,
        textError: "Пожалуйста, введите корректный e-mail",
      },
      company: {
        label: "Название компании",
        value: "",
        id: "company",
      },
    };
  },
  components: {
    GuiInput,
  },
  methods: {
    mailCheck() {
      if ((this.mail.hasError = !this.mail.value.includes("@"))) {
        this.mail.hasError = true;
      } else {
        this.mail.hasError = false;
      }
    },
    phoneCheck() {
      let re = /^\d[\d\(\)\ -]{4,14}\d$/;
      if ((this.number.hasError = !re.test(this.number.value))) {
        this.number.hasError = true;
      } else {
        this.number.hasError = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.application-form {
  background-color: #f3f5f7;

  &__container {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px 24px;

    @media screen and (min-width: 768px) {
      padding: 72px 24px;
    }
  }

  &__caption {
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 24px;
  }

  &__header {
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: 34px;
      line-height: 48px;
    }
  }

  &__controls-block {
    margin: 24px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (min-width: 992px) {
      flex-direction: row;
      margin: 48px 0;
    }
  }
}
</style>
