<template>
  <section class="news-carousel">
    <div class="news-carousel__container">
      <div class="news-carousel__header-block">
        <h2 class="news-carousel__header">Новости</h2>
        <div class="news-carousel__selector">
          <GuiTripleIcon
            class="news-carousel__arrow-left"
            @click="onClickPrevSlide"
            :disabled="carouselItemActive === 1"
            icon="ArrowRight"
            dark
          />
          <GuiTripleIcon
            @click="onClickNextSlide"
            :disabled="carouselItemActive === carouselItemAllCount"
            icon="ArrowRight"
            dark
          />
        </div>
      </div>
      <div class="news-carousel__visible-block">
        <div
          :style="{ left: `${carouselItemOffsetLeft}px` }"
          class="news-carousel__hidden-block"
        >
          <div
            v-for="(item, index) in newsList"
            :key="index"
            class="new-item"
            :class="{
              'new-item--active':
                index === carouselItemActive ||
                index === carouselItemActive - 1,
            }"
          >
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
      carouselItemActive: 1,
      carouselItemWidth: 500,
    };
  },

  methods: {
    onClickNextSlide() {
      if (this.carouselItemActive < `${this.carouselItemAllCount}`) {
        this.carouselItemActive += 1;
      }
    },

    onClickPrevSlide() {
      if (this.carouselItemActive > 1) {
        this.carouselItemActive -= 1;
      }
    },
  },
  computed: {
    carouselItemOffsetLeft() {
      return -(
        this.carouselItemActive * this.carouselItemWidth -
        this.carouselItemWidth
      );
    },

    carouselItemAllCount() {
      return this.newsList.length;
    },

    newsList() {
      return this.$store.getters["news/sortedByDateNews"];
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

  &__arrow-left {
    transform: scale(-1, 1);
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
  cursor: pointer;
  opacity: 0.5;

  &--active {
    opacity: 1;
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
    color: $gray1;
    margin-bottom: 24px;
  }

  &__date {
    font-size: 13px;
    line-height: 24px;
    font-weight: 500;
    color: $gray1;
  }
}
</style>
