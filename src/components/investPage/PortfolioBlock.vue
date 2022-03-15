<template>
  <section class="portfolio-block">
    <h1 class="header">Структура портфеля</h1>
    <GuiSelect
      @change="changeSelectOption"
      :options="options"
      :selectedOption="selected"
    />
    <div class="percent-block">
      <div class="percent-block__container">
        <div class="percent-block__info">
          <div class="list-items">
            <div
              v-for="(item, index) of listItems"
              :key="index"
              class="list-items__item"
            >
              <div
                :style="{ 'background-color': `${item.color}` }"
                class="list-items__square"
              ></div>
              <p class="list-items__percent">
                {{ item.percent }}
              </p>
              <p class="list-items__name">
                {{ item.name }}
              </p>
            </div>
          </div>

          <div class="index-block">
            <p class="index-block__name">10%</p>
            <img src="images/investPageDiagram.jpg" alt="" />
            <p class="index-block__text">Ставка доходности за 2019 год</p>
          </div>
        </div>

        <article class="percent-block__article">
          АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных
          резервов в интересах участников Фонда на принципах сохранности и
          надежности, в соответствии с действующим законодательством РФ и
          корпоративной инвестиционной политикой, которая: - основана на анализе
          макроэкономических тенденций и финансовых рынков в долгосрочной
          перспективе, - предусматривает широкую диверсификацию инвестиционных
          портфелей, - предписывает четкий контроль и регулярное отслеживание
          динамики инвестиционных портфелей.
        </article>
        <article class="percent-block__article">
          Банки, с которыми сотрудничает Фонд, являются участниками системы
          страхования вкладов и обладают кредитными рейтингами от одного или
          нескольких международных и/или национальных рейтинговых агентств –
          Рейтинговое агентство RAEX («Эксперт РА»), АКРА (Аналитическое
          Кредитное Рейтинговое Агентство), Standard & Poor`s, Fitch или
          Moody`s. Для инвестиций в государственные ценные бумаги и другие
          финансовые инструменты Фонд привлекает управляющие компании. С 2009
          года АО НПФ «Ренессанс пенсии» сотрудничает с АО "Сбербанк Управление
          Активами», одним из крупнейших и успешных управляющих на российском
          рынке, АО «УК «ТРАНСФИНГРУП» и УК «Спутник – Управление Капиталом». В
          соответствии с нормами законодательства, ежедневный контроль за
          соблюдением фондами и управляющими компаниями ограничений на
          размещение средств пенсионных резервов осуществляет специализированный
          депозитарий. Для АО НПФ «Ренессанс пенсии» эти услуги предоставляет
          ЗАО ВТБ Специализированный депозитарий, занимающее лидирующие позиции
          на внутреннем рынке депозитарных услуг. Фонд на ежедневной основе
          рассчитывает долю активов, приходящуюся на каждый пенсионный счет.
          Окончательный расчет и распределение инвестиционного дохода за
          календарный год на пенсионные счета участников производится, в
          соответствии с требованиями законодательства РФ, до 31-го марта
          следующего календарного года.
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import GuiSelect from "../gui/GuiSelect.vue";

export default {
  data() {
    return {
      options: [
        { name: "Январь 2019 года", value: 1 },
        { name: "Февраль 2019 года", value: 2 },
        { name: "Март 2019 года", value: 3 },
        { name: "Апрель 2019 года", value: 4 },
        { name: "Май 2019 года", value: 5 },
        { name: "Июнь 2019 года", value: 6 },
        { name: "Июль 2019 года", value: 7 },
        { name: "Август 2019 года", value: 8 },
        { name: "Сентябрь 2019 года", value: 9 },
        { name: "Октрябрь 2019 года", value: 10 },
        { name: "Ноябрь 2019 года", value: 11 },
        { name: "Декабрь 2019 года", value: 12 },
      ],
      selected: "Месяц",
      listItems: [
        {
          percent: "46%",
          name: "Субфедеральные облигации",
          color: "#ff025a",
        },
        {
          percent: "12%",
          name: "Государственные облигации",
          color: "#04999a",
        },
        { percent: "28%", name: "Банковские депозиты", color: "#cedc01" },
        {
          percent: "14%",
          name: "Корпоративные облигации",
          color: "#50287d",
        },
      ],
    };
  },
  components: {
    GuiSelect,
  },
  methods: {
    changeSelectOption(option) {
      this.selected = option.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.percent-block {
  &__info {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 576px) {
      flex-direction: row;
    }
  }

  &__article {
    font-size: 16px;
    line-height: 24px;
    color: $gray2;
    margin-bottom: 24px;
  }
}

.portfolio-block {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px 24px;
}

.header {
  font-size: 34px;
  line-height: 48px;
  margin-bottom: 24px;
}

.list-items {
  display: flex;
  flex-direction: column;
  margin: 24px 0;

  &__item {
    position: relative;
    max-width: 220px;
    display: flex;
    align-items: start;
    margin: 24px 0;
  }

  &__percent {
    max-width: 48px;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    padding-left: 20px;
    color: $main-dark;
  }

  &__square {
    position: absolute;
    flex: none;
    width: 8px;
    height: 8px;
    top: 8px;
  }

  &__name {
    font-size: 13px;
    line-height: 24px;
    color: $gray2;
    margin-left: 24px;
  }
}

.index-block {
  height: 264px;
  max-width: 160px;
  border: 1px solid $gray5;
  padding: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin: 48px 0 0 48px;
  }

  &__name {
    font-size: 34px;
    line-height: 48px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  &__text {
    font-size: 15px;
    line-height: 24px;
    color: $gray2;
    margin-top: 24px;
  }
}
</style>
