<template>
  <section class="news-article">
    <button class="news-article__nav" @click="$router.push({ name: 'News' })">
      К списку новостей
    </button>
    <GuiPreloader :show="show" />
    <div v-show="!show" class="article">
      <h1 class="news-article__title">{{ title }}</h1>
      <div class="news-article__date">{{ date }}</div>
      <p
        class="news-article__paragraphs"
        v-for="paragraph of paragraphs"
        :key="paragraph"
      >
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<script>
import newsApi from "../../api/news";
import GuiPreloader from "../../components/gui/GuiPreloader.vue";

export default {
  data() {
    return {
      title: null,
      date: null,
      paragraphs: null,
      show: null,
    };
  },

  methods: {
    getArticle() {
      this.show = true;
      newsApi
        .getNewsArticleById(this.$route.params.id)
        .then((response) => {
          this.paragraphs = response.data.paragraphs;
          this.title = response.data.title;
          this.date = response.data.date;
        })
        .catch((error) => {
          // Тут обрабатываем кейс ошибки
        })
        .finally(() => {
          this.show = false;
        });
    },
  },

  watch: {
    "$route.params.id"() {
      this.getArticle();
    },
  },

  created() {
    this.getArticle();
  },

  components: {
    newsApi,
    GuiPreloader,
  },
};
</script>

<style lang="scss" scoped>
.news-article {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;

  &__nav {
    font-size: 16px;
    line-height: 24px;
    color: $gray3;
    margin-bottom: 24px;
    position: relative;
    padding-left: 24px;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 4px;
      border: 6px solid transparent;
      border-right: 6px solid $gray1;
    }

    &:hover {
      color: $gray4;
    }
  }

  &__title {
    font-size: 28px;
    line-height: 36px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
    }
  }

  &__date {
    font-size: 13px;
    line-height: 24px;
    color: $gray2;
    margin: 24px 0;
  }

  &__paragraphs {
    font-size: 16px;
    line-height: 24px;
    color: $gray1;
    margin-bottom: 24px;
  }
}
</style>
