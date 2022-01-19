<template>
  <section class="tax-preferences">
    <div class="tax-preferences__container">
      <div class="tax-preferences__button-group">
        <GuiSwitchCards
          :name="name"
          :value="radioButtonCompany.value"
          :icon="radioButtonCompany.icon"
          :text="radioButtonCompany.text"
          :choosedButtonValue="choosedButtonValue"
          @changeButton="
            choosedButtonValue = $event;
            usersBlockHidden = !usersBlockHidden;
          "
        />
        <GuiSwitchCards
          :name="name"
          :value="radioButtonUsers.value"
          :icon="radioButtonUsers.icon"
          :text="radioButtonUsers.text"
          :choosedButtonValue="choosedButtonValue"
          @changeButton="
            choosedButtonValue = $event;
            usersBlockHidden = !usersBlockHidden;
          "
        />
      </div>
      <article class="tax-preferences__content">
        <h2 class="tax-preferences__title">Налоговые преференции</h2>
        <div class="tax-preferences__for-company" v-if="usersBlockHidden">
          <div class="tax-preferences__caption">
            Страховые взносы (Бывший ЕСН) пп. 5 п. 1 ст. 422 НК РФ
          </div>
          <p class="tax-preferences__text">
            Пенсионные взносы в пользу работников в рамках корпоративной
            пенсионной программы не облагаются страховыми взносами (30% от ФОТ)
            в федеральный бюджет: ПФР, ФОМС, ФСС
          </p>
          <div class="tax-preferences__caption">
            Страховые взносы (Бывший ЕСН) пп. 5 п. 1 ст. 422 НК РФ
          </div>
          <p class="tax-preferences__text">
            Пенсионные взносы в пользу работников в рамках корпоративной
            пенсионной программы не облагаются страховыми взносами (30% от ФОТ)
            в федеральный бюджет: ПФР, ФОМС, ФСС
          </p>
        </div>
        <div class="tax-preferences__for-users" v-else>
          <div class="tax-preferences__caption">
            Социальный налоговый вычет п.4 п.1 ст.219 НК РФ
          </div>
          <p class="tax-preferences__text">
            Возможность получить социальный налоговый вычет в размере 13% от
            суммы уплаченных взносов по личному договору негосударственного
            пенсионного обеспечения (максимальный размер суммы взносов для
            получения налогового вычета - 120.000 рублей/год).
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import GuiSwitchCards from "../gui/GuiSwitchCards.vue";

export default {
  data() {
    return {
      choosedButtonValue: "company",
      name: "radio-button",
      radioButtonCompany: {
        icon: "Company",
        value: "company",
        text: "Для компании",
      },
      radioButtonUsers: {
        icon: "Users",
        value: "users",
        text: "Для сотрудников",
      },
      usersBlockHidden: true,
    };
  },
  components: {
    GuiSwitchCards,
  },
};
</script>

<style lang="scss" scoped>
.tax-preferences {
  &__container {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__button-group {
    max-width: 276px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 576px) {
      flex-direction: row;
      align-items: center;
    }

    @media screen and (min-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__content {
    max-width: 560px;
    margin-left: 0;

    @media screen and (min-width: 768px) {
      margin-left: 24px;
    }
  }

  &__title {
    font-size: 34px;
    line-height: 48px;
    font-weight: 600;
  }

  &__caption {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin: 36px 0 24px;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
  }
}
</style>
