<template>
  <div class="carousel-block">
    <div class="carousel-block__header-block">
      <h3 class="carousel-block__title">История фонда</h3>
      <div class="group-icon">
        <GuiTripleIcon
          class="group-icon__arrow-left"
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
    <div
      class="carousel-block__visible-block"
      :style="{ left: `${carouselItemOffsetLeft}px` }"
    >
      <div class="carousel-block__hidden-block">
        <div
          v-for="(item, index) in historyList"
          :key="index"
          class="carousel-item"
          :class="{
            'carousel-item--active':
              index === carouselItemActive || index === carouselItemActive - 1,
          }"
        >
          <div class="carousel-item__year">{{ item.year }}</div>
          <div class="carousel-item__line"></div>
          <p class="carousel-item__text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
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
      return this.historyList.length;
    },

    historyList() {
      return this.$store.getters["history/historyListYear"];
      //а если бы надо было взять массив из state, я бы написала
      //return this.$store.state.history.historyList
    },
  },
  components: {
    GuiTripleIcon,
  },
};
</script>

<style lang="scss" scoped>
.group-icon {
  &__arrow-left {
    transform: scale(-1, 1);
  }
}

.carousel-block {
  margin-bottom: 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  &__header-block {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  &__visible-block {
    white-space: nowrap;
    width: 100%;
    max-width: 960px;
    padding: 24px;
    margin: 0 auto;
    position: relative;
    transition: all 0.5s ease;
  }

  &__hidden-block {
    display: inline-flex;
    position: relative;
    left: 0;
  }
}

.carousel-item {
  max-width: 500px;
  white-space: normal;
  opacity: 0.5;

  &--active {
    opacity: 1;
  }

  &__year {
    font-size: 34px;
    line-height: 48px;
    font-weight: 500;
  }

  &__line {
    border-top: 1px solid $gray5;
    margin: 24px 0;
    position: relative;
    width: 100vw;

    &::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: $main-dark;
      border-radius: 50%;
      position: absolute;
      bottom: -4px;
    }
  }

  &__text {
    padding-right: 72px;
    font-size: 16px;
    line-height: 24px;
    color: $gray2;

    @media screen and (min-width: 768px) {
      padding-right: 140px;
    }
  }
}
</style>
