<template>
  <div class="other-news">
    <h2 class="other-news__header">Другие новости</h2>
    <GuiPreloader v-if="show" />
    <NewsList
      v-else
      :generalListOfNews="getTwoNews"
      :newsListDefault="newsListDefault"
    />
  </div>
</template>

<script>
import NewsList from "../general/NewsList.vue";
import GuiPreloader from "../gui/GuiPreloader.vue";

export default {
  data() {
    return {
      newsListDefault: true,
    };
  },

  computed: {
    newsList() {
      return this.$store.getters["news/sortedByDateNews"];
    },

    show() {
      return this.$store.state.news.isLoading;
    },

    getTwoNews() {
      let currentNews = Number(this.$route.params.id);

      return this.newsList.filter((elem) => {
        return elem.id === currentNews - 1 || elem.id === currentNews + 1;
      });
    },
  },

  components: {
    NewsList,
    GuiPreloader,
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
</style>
