<template>
  <div>
    <TopBlock :title-text="title" :subtitle-text="subtitle"></TopBlock>
    <TitleBlock></TitleBlock>
    <ForBusinessBlock></ForBusinessBlock>
    <AboutFundBlock></AboutFundBlock>
  </div>
</template>

<script>
import TopBlock from "../components/TopBlock.vue";
import TitleBlock from "../components/TitleBlock.vue";
import ForBusinessBlock from "../components/ForBusinessBlock.vue";
import AboutFundBlock from "../components/AboutFundBlock.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "Уверенность в будущем, доступная каждому",
      subtitle:
        "Обеспечьте себе стабильность и приступайте к реализации своих самых смелых планов!",
    };
  },
  components: {
    TopBlock,
    TitleBlock,
    ForBusinessBlock,
    AboutFundBlock,
  },
};
</script>

<style lang="scss" scoped></style>
