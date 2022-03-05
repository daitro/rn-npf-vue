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
          <NewsList
            :generalListOfNews="newsList"
            :carouselItemActive="carouselItemActive"
            :newsCarousel="newsCarousel"
            :carouselItemOffsetLeft="carouselItemOffsetLeft"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiTripleIcon from "../gui/GuiTripleIcon.vue";
import NewsList from "../general/NewsList.vue";

export default {
  data() {
    return {
      carouselItemActive: 1,
      carouselItemWidth: 500,
      newsCarousel: true,
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
    NewsList,
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

  // &__hidden-block {
  //   display: inline-flex;
  //   position: relative;
  //   transition: all 0.5s ease;
  //   left: 0;
  // }
}
</style>
