<template>
  <section class="news-carousel">
    <div class="news-carousel__container">
      <div class="news-carousel__header-block">
        <h2 class="news-carousel__header">Новости</h2>
        <div class="news-carousel__selector">
          <GuiTripleIcon
            style="transform: scale(-1, 1)"
            icon="ArrowRight"
            dark
            @click.native="onClickPrevSlide"
          />

          <GuiTripleIcon
            icon="ArrowRight"
            dark
            @click.native="onClickNextSlide"
          />
        </div>
      </div>
      <div class="news-carousel__visible-block">
        <div
          :style="{ left: sliderOffsetLeft + 'px' }"
          class="news-carousel__hidden-block"
        >
          <div v-for="(item, index) in news" :key="index" class="new-item">
            <h3 class="new-item__title">{{ item.title }}</h3>
            <p class="new-item__text">{{ item.text }}</p>
            <div class="new-item__date">{{ item.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiTripleIcon from "../gui/GuiTripleIcon.vue";

export default {
  data() {
    return {
      sliderAllCount: 4,
      sliderActive: 1,
      sliderOffsetLeft: 0,
      sliderOffsetStep: 0,
    };
  },
  props: ["news"],
  methods: {
    openSlide(sliderIndex) {
      let slider = document.querySelector(".new-item");
      this.sliderOffsetStep = slider.clientWidth;

      if (sliderIndex > 0 && sliderIndex <= this.sliderAllCount) {
        this.sliderActive = sliderIndex;
        this.sliderOffsetLeft = -(
          this.sliderActive * this.sliderOffsetStep -
          this.sliderOffsetStep
        );
      }
    },

    onClickNextSlide() {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1;
        this.openSlide(this.sliderActive);
      }
    },

    onClickPrevSlide() {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1;
        this.openSlide(this.sliderActive);
      }
    },
  },
  components: {
    GuiTripleIcon,
  },
};
</script>

<style lang="scss" scoped>
.news-carousel {
  &__container {
    padding: 24px 24px 48px;
    overflow: hidden;
  }

  &__header-block {
    max-width: 960px;
    margin: 0 auto;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
      padding: 0 24px;
    }
  }

  &__header {
    font-size: 34px;
    line-height: 48px;
    font-weight: 600;
  }

  &__visible-block {
    white-space: nowrap;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding-top: 12px;
    position: relative;

    @media screen and (min-width: 768px) {
      padding: 24px;
    }
  }

  &__hidden-block {
    display: inline-flex;
    position: relative;
    transition: all 0.5s ease;
    left: 0;
  }
}

.new-item {
  width: 340px;
  padding-right: 72px;
  white-space: normal;
  &:hover {
    opacity: 70%;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    padding-right: 140px;
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    color: #50287e;
    margin-bottom: 24px;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: #5a646e;
    margin-bottom: 24px;
  }

  &__date {
    font-size: 13px;
    line-height: 24px;
    font-weight: 500;
    color: #5a646e;
  }
}
</style>
