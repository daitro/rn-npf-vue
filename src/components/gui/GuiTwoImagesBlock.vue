<template>
  <section class="two-image-block">
    <div class="two-image-block__container">
      <div class="two-image-block__group">
        <img class="two-image-block__first-image" :src="firstImg" />
        <img class="two-image-block__second-image" :src="secondImg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    firstImg: {
      type: String,
      required: true,
    },
    secondImg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.two-image-block {
  &__container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 24px;
  }

  &__group {
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (min-width: 578px) {
      flex-direction: row;
      margin-bottom: 120px;
    }
  }

  &__first-image {
    margin-bottom: 24px;
    @media screen and (min-width: 578px) {
      width: 57%;
      z-index: 1;
    }
  }

  &__second-image {
    @media screen and (min-width: 578px) {
      position: absolute;
      width: 57%;
      top: 27%;
      left: 43%;
    }
  }
}
</style>
