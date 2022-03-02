<template>
  <div class="news-page-article">
    <TopMenu :darkTheme="darkTheme" />
    <Article />
    <!-- <Article :key="$route.params.id" /> -->
    <OtherNewsBlock />
  </div>
</template>

<script>
import OtherNewsBlock from "../components/newsPageArticle/OtherNewsBlock.vue";
import Article from "../components/newsPageArticle/Article.vue";
import TopMenu from "../components/app/TopMenu.vue";

export default {
  data() {
    return {
      darkTheme: true,
    };
  },

  components: {
    TopMenu,
    Article,
    OtherNewsBlock,
  },

  created() {
    console.log("created page");
  },
};
</script>

<style></style>
