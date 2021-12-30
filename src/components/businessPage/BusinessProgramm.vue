<template>
  <section class="business-programm">
    <div class="business-programm__container row">
      <h2 class="business-programm__title">
        Как работает корпоративная пенсионная программа
      </h2>
      <div
        class="content-block col-md-6"
        v-for="(card, index) in cards"
        :key="index"
      >
        <TripleIcon
          :icon="card.icon"
          :static="true"
          class="content-block__icon"
        />
        <div class="content-block__text-group">
          <h3 class="content-block__title">
            {{ card.title }}
          </h3>
          <p
            class="content-block__text"
            v-for="(phrase, index) in card.text"
            :key="index"
          >
            {{ phrase }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TripleIcon from "../gui/TripleIcon.vue";

export default {
  data() {
    return {
      cards: [
        {
          icon: "Case",
          title: "Работодатель (Вкладчик)",
          text: ["Определяет условия программы", "Уплачивает взносы в фонд"],
        },
        {
          icon: "Man",
          title: "Сотрудник (Участник)",
          text: [
            "Заключает личный договор",
            "Уплачивает взносы в фонд",
            "Выполняет условия программы",
            "Получает пенсию или выкупную сумму",
          ],
        },
        {
          icon: "Bank",
          title: "Фонд",
          text: [
            "Аккумулирует взносы вкладчика (Участника) ведет учет, распределяет инвестиционный доход",
            "Выплачивает негосударственные пенсии участникам",
          ],
        },
        {
          icon: "Candle",
          title: "Управляющая компания",
          text: [
            "Управляет портфелем ценных бумаг",
            "Инвестирует с целью получения дохода",
          ],
        },
      ],
    };
  },
  components: {
    TripleIcon,
  },
};
</script>

<style lang="scss" scoped>
.business-programm {
  &__container {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px;
  }

  &__title {
    font-size: 28px;
    line-height: 36px;
    font-weight: 600;
    max-width: 760px;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 48px;
    }
  }
}

.content-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding-left: 0;
  padding-right: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 48px;
  }

  &__text-group {
    margin-top: 12px;
    @media screen and (min-width: 768px) {
      margin-left: 40px;
      margin-top: 0;
    }
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    padding-left: 24px;
    margin-bottom: 12px;
    position: relative;

    &::before {
      content: "";
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background-color: #50287d;
      position: absolute;
      left: 8px;
      top: 8px;
      line-height: 24px;
    }
  }
}
</style>
