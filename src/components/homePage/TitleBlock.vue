<template>
  <div class="title-block">
    <h2 class="title-block__header">
      Ренессанс пенсии входит в число десяти крупнейших негосударственных
      пенсионных фондов России
    </h2>
    <p class="title-block__sub-header">
      По состоянию на 31 марта 2019 фонд ведет более 150 корпоративных
      пенсионных планов, объем резервов которых превышает 18 млрд. рублей.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title-block {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px;

  &__header {
    max-width: 860px;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      font-size: 36px;
      line-height: 48px;
    }
  }

  &__sub-header {
    max-width: 560px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #78828c;
  }
}
</style>
