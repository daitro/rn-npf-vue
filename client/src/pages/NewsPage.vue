<template>
  <div class="news-block">
    <TopMenu />
    <TopBlock
      :title-text="title"
      :imagePath="'/images/newsTopBlock.jpg'"
    ></TopBlock>
    <NewsLine></NewsLine>
  </div>
</template>

<script>
import TopMenu from "../components/app/TopMenu.vue";
import TopBlock from "../components/app/TopBlock.vue";
import NewsLine from "../components/newsPage/NewsLine.vue";

export default {
  data() {
    return {
      title: "Новости",
    };
  },
  components: {
    TopMenu,
    TopBlock,
    NewsLine,
  },
};
</script>

<style></style>
