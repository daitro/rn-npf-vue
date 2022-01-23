<template>
  <div class="top-block" id="top-block">
    <div
      class="top-block__info"
      :style="{ 'background-image': `url(${imagePath})` }"
    >
      <div class="top-block__container">
        <h1 class="title">{{ titleText }}</h1>
        <h3 class="top-block__sub-title">{{ subtitleText }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
    subtitleText: {
      type: String,
    },
    imagePath: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.top-block {
  &__info {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  &__sub-title {
    font-size: 14px;
    line-height: 20px;
    color: white;
    max-width: 660px;
    width: 100%;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__container {
    max-width: 964px;
    width: 100%;
    margin: 0 auto;
    padding: 120px 24px 64px;

    @media screen and (min-width: 768px) {
      padding: 360px 24px 70px;
    }
  }
}
</style>
