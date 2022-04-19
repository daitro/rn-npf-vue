<template>
  <section
    :class="{ 'news-list': newsCarousel }"
    :style="{ left: `${carouselItemOffsetLeft}px` }"
  >
    <div
      :class="{
        'new-item': newsListDefault,
        'new-item-carousel': newsCarousel,
        'new-item-carousel--active':
          index === carouselItemActive || index === carouselItemActive - 1,
      }"
      v-for="(item, index) in generalListOfNews"
      :key="item.id"
    >
      <h3
        :class="{
          'new-item__title': newsListDefault,
          'new-item-carousel__title': newsCarousel,
        }"
        @click="goToNewsArticle(item.id)"
      >
        {{ item.title }}
      </h3>
      <p
        :class="{
          'new-item__text': newsListDefault,
          'new-item-carousel__text': newsCarousel,
        }"
      >
        {{ item.date }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    generalListOfNews: {
      type: Array,
      required: true,
    },

    carouselItemActive: {
      type: Number,
    },

    newsCarousel: {
      type: Boolean,
    },

    carouselItemOffsetLeft: {
      type: Number,
    },

    newsListDefault: {
      type: Boolean,
    },
  },
  methods: {
    goToNewsArticle(id) {
      this.$router.push({
        name: "News-Article",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.news-list {
  display: inline-flex;
  position: relative;
  transition: all 0.5s ease;
  left: 0;
}

.new-item {
  margin-top: 24px;
  padding-bottom: 24px;
  cursor: pointer;

  &:hover > &__title {
    color: #802be0;
  }

  &:not(&:last-child) {
    border-bottom: 1px solid $gray5;
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: $primary;
    margin-bottom: 24px;
  }

  &__text {
    font-size: 13px;
    line-height: 24px;
    color: $gray1;
  }
}

.new-item-carousel {
  width: 500px;
  padding-right: 72px;
  white-space: normal;
  cursor: pointer;
  opacity: 0.5;

  &--active {
    opacity: 1;
  }

  &:hover > &__title {
    color: #802be0;
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: $primary;
    margin-bottom: 24px;
  }

  &__text {
    font-size: 13px;
    line-height: 24px;
    color: $gray1;
  }
}
</style>
