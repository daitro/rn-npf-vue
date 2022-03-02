<template>
  <div class="other-news">
    <h2 class="other-news__header">Другие новости</h2>
    <div v-for="item in getTwoNews" :key="item.id" class="new-item">
      <button @click="goToNewsArticle(item.id)" class="new-item__title">
        {{ item.title }}
      </button>
      <p class="new-item__date">{{ item.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToNewsArticle(id) {
      this.$router.push(`/news/${id}`);
    },
  },

  computed: {
    newsList() {
      return this.$store.getters["news/sortedByDateNews"];
    },

    getTwoNews() {
      let currentNews = Number(this.$route.params.id);

      return this.newsList.filter((elem) => {
        return elem.id === currentNews - 1 || elem.id === currentNews + 1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.other-news {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;

  &__header {
    font-size: 34px;
    line-height: 48px;
    font-weight: 500;
  }
}

.new-item {
  padding: 24px 0 48px;
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
    color: #6834a2;
    margin-bottom: 24px;
  }

  &__text {
    font-size: 13px;
    line-height: 24px;
    color: $gray1;
  }
}
</style>
