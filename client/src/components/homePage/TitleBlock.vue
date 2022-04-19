<template>
  <div class="title-block">
    <h2 class="title-block__header">
      Южный банк входит в ТОП-100 по основным показателям капитала, выданных
      кредитов и привлеченных вкладов населения.
    </h2>
    <p class="title-block__sub-header">
      Основным акционером (учредителем) АО «Южный банк» является INVESTMENTS
      LIMITED (ИНВЕСТМЕНТС ЛИМИТЕД), который владеет 99,9% уставного капитала
      банка. Генеральным директором и конечным собственником является Кирсанов
      Лев Михайлович, занимающий эту должность с 2002 года.
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
    color: $gray2;
  }
}
</style>
