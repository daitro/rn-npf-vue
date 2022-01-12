<template>
  <section class="about-content">
    <div class="about-content__text-block">
      <p class="about-content__text">
        Мы являемся одним из немногих безотраслевых фондов, что позволяет нам
        вести абсолютно прозрачную и независимую инвестиционную политику в
        отношении наших клиентов и занимать лидирующие позиции на протяжении
        последних 15 лет. Акционерами Фонда являются: ООО "Велби Холдинг" и АО
        СК "Ренессанс здоровье".
      </p>
      <p class="about-content__text">
        Акционерами Фонда являются: ООО "Велби Холдинг" и АО СК "Ренессанс
        здоровье".
      </p>
    </div>
    <AboutUsCarousel :historyList="historyList"></AboutUsCarousel>
  </section>
</template>

<script>
import AboutUsCarousel from "../aboutPage/AboutUsCarousel.vue";

export default {
  data() {
    return {
      historyList: [
        {
          year: "2002",
          text: "Дата основания фонда как части финансовой группы ING в Росии. Уже в 2003 году в Фонд приходят первые крупные клинеты, что дает Фонду существенный толчок к развитию и сделало его привлекательным в глазах будущих партнеров.",
        },
        {
          year: "2008",
          text: "Клиентами Фонда стали более 70 наших текущих партнеров.",
        },
        {
          year: "2010",
          text: "В связи с изменением бизнес стратегии компании ING в России, фонд был выкуплен крупнейшей Британской страховой компанией AVIVA, что только лишь усилило позиции Фонда.",
        },
        {
          year: "2020",
          text: "Дата основания фонда как части финансовой группы ING в Росии. Уже в 2003 году в Фонд приходят первые крупные клинеты, что дает Фонду существенный толчок к развитию и сделало его привлекательным в глазах будущих партнеров.",
        },
      ],
    };
  },
  components: {
    AboutUsCarousel,
  },
};
</script>

<style lang="scss" scoped>
.about-content {
  &__text-block {
    max-width: 960px;
    margin: 0 auto;
    padding: 72px 24px;
  }
  &__text {
    max-width: 760px;
    font-size: 16px;
    line-height: 24px;
    color: #78828c;
    margin-bottom: 24px;
  }
}
</style>
