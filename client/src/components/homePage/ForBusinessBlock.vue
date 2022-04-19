<template>
  <div class="business-block">
    <div class="row business-block__alignment">
      <img class="col-md-7" src="/images/indexForBusinessImg.jpg" alt="" />
      <div class="offset-md-1"></div>
      <div class="business-block__content col-md-4">
        <div class="business-block__header">Кредит за 1 минуту</div>
        <div class="business-block__text">
          Планируете незабываемый отдых? Мы предлагаем оформить кредит наличными
          по специальной ставке от 7,5%
        </div>
        <button
          @click="$router.push('/business#business-callback-form')"
          class="button-primary"
        >
          Отправить заявку
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.business-block {
  max-width: 1188px;
  margin: 0 auto;
  padding: 24px;

  @media screen and (min-width: 768px) {
    padding: 48px 24px;
  }

  &__alignment {
    align-items: center;
  }

  &__header {
    font-size: 24px;
    line-height: 48px;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: 24px;
      font-size: 36px;
    }
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: $gray1;
    margin-bottom: 24px;
  }
}
</style>
