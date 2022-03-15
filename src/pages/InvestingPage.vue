<template>
  <div class="investing">
    <TopMenu />
    <TopBlock
      :imagePath="imgTopBlock"
      :titleText="titleText"
      :subtitleText="subtitleText"
    />
    <CardList :fundBlockTitle="title" :cards="cardItems" />
    <PortfolioBlock />
  </div>
</template>

<script>
import TopBlock from "../components/app/TopBlock.vue";
import TopMenu from "../components/app/TopMenu.vue";
import CardList from "../components/general/CardList.vue";
import PortfolioBlock from "../components/investPage/PortfolioBlock.vue";

export default {
  data() {
    return {
      title: "Правила инвестирования",
      cardItems: [
        {
          icon: "Money",
          text: "Сохранение и приумножение средств вкладчиков и участников",
        },
        {
          icon: "Separation",
          text: "Диверсификация активов",
        },
        {
          icon: "Invest",
          text: "Четкий контроль и прозрачность всех операций",
        },
        {
          icon: "Book",
          text: "Соответствие Российским законодательным требованиям и лучшим мировым практикам",
        },
        {
          icon: "Partner",
          text: "Независимость в выборе партнеров – на основе открытых тендеров",
        },
      ],
      imgTopBlock: "/images/investMain.jpg",
      titleText: "Инвестиционная деятельность",
      subtitleText:
        "АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой",
    };
  },
  components: {
    TopMenu,
    CardList,
    TopBlock,
    PortfolioBlock,
  },
};
</script>

<style></style>
