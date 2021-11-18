<template>
  <section class="fund-block">
    <h3 class="header-mini">Фонд в цифрах</h3>
    <div class="row five-column">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="content-block col-sm-4 col-md-3 col-lg-3"
      >
        <img
          src="../assets/icons/calendarDark.svg"
          alt=""
          class="content-block__icon"
        />
        <h3 class="header-mini">{{ card.header }}</h3>
        <div class="content-block__text">{{ card.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          icon: "calendarDark",
          header: "17 лет на рынке",
          text: "Фонд основан в 2002 году",
        },
        {
          icon: "calendarDark",
          header: "Высокий рейтинг",
          text: "Надежность ruАА- по оценке Эксперт РА",
        },
        {
          icon: "calendarDark",
          header: "41 000 человек",
          text: "участники пенсионной программы",
        },
        {
          icon: "calendarDark",
          header: "150 компаний",
          text: "заботятся о пенсиях сотрудников",
        },
        {
          icon: "calendarDark",
          header: "17 млрд рублей",
          text: "пенсионных резервов в Фонде",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fund-block {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px;
}

.header-mini {
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 24px;
}

.five-column {
  flex-wrap: wrap;
  margin-right: 0;
  margin-left: 0;
  @media screen and (min-width: 992px) {
    flex-wrap: nowrap;
  }
}

.content-block {
  border-bottom: 1px solid #e4e6e8;
  padding: 24px 12px;
  flex-shrink: 0;
  margin-right: -1px;

  @media screen and (min-width: 576px) {
    margin-top: -1px;
    padding: 32px 32px 24px;
    border: 1px solid #e4e6e8;
  }

  @media screen and (min-width: 992px) {
    flex-shrink: 1;
  }

  &__icon {
    margin-bottom: 64px;
  }

  &__text {
    font-size: 13px;
    line-height: 24px;
    color: #78828c;
  }
}
</style>
