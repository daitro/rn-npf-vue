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
    <AboutUsCarousel></AboutUsCarousel>
  </section>
</template>

<script>
import AboutUsCarousel from "../aboutPage/AboutUsCarousel.vue";

export default {
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
    color: $gray2;
    margin-bottom: 24px;
  }
}
</style>
