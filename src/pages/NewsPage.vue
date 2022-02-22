<template>
  <div class="news-block">
    <TopBlock
      :title-text="title"
      :imagePath="'/images/newsTopBlock.jpg'"
    ></TopBlock>
    <NewsLine></NewsLine>
  </div>
</template>

<script>
import TopBlock from "../components/app/TopBlock.vue";
import NewsLine from "../components/newsPage/NewsLine.vue";

export default {
  data() {
    return {
      title: "Новости",
    };
  },
  components: {
    TopBlock,
    NewsLine,
  },
  created() {
    this.$store.dispatch("news/getNewsList");
  },
};
</script>

<style></style>
