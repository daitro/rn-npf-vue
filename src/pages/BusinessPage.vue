<template>
  <div class="business-page">
    <TopMenu />
    <TopBlock
      :title-text="title"
      :subtitle-text="subtitle"
      :imagePath="'/images/businessTopBlock.jpg'"
    />
    <BusinessProgramm />
    <GuiTwoImagesBlock :firstImg="firstImg" :secondImg="secondImg" />
    <CardList :fundBlockTitle="fundBlockTitle" :cards="cards" />
    <BusinessTaxBlock />
    <BusinessCallbackForm />
  </div>
</template>

<script>
import TopMenu from "../components/app/TopMenu.vue";
import TopBlock from "../components/app/TopBlock.vue";
import BusinessProgramm from "../components/businessPage/BusinessProgramm.vue";
import GuiTwoImagesBlock from "../components/gui/GuiTwoImagesBlock.vue";
import CardList from "../components/general/CardList.vue";
import BusinessTaxBlock from "../components/businessPage/BusinessTaxBlock.vue";
import BusinessCallbackForm from "../components/businessPage/BusinessCallbackForm.vue";

export default {
  data() {
    return {
      title: "Для бизнеса",
      subtitle:
        "Корпоративная пенсионная программа – современный, эффективный инструмент с уникальным набором опций и преференций, позволяющий оказывать влияние на мотивацию персонала и управлять результативностью бизнеса, создавая для компании положительный имидж и характеризуя ее как социально ответственного работодателя.",
      firstImg: "/images/businessWomans.jpg",
      secondImg: "/images/businessWorkingTable.jpg",
      fundBlockTitle: "Преимущества Фонда",
      cards: [
        {
          icon: "Invest",
          text: "Полная прозрачность инвестиционного процесса",
        },
        {
          icon: "Group",
          text: "Представители крупных международных компаний составляют Попечительский Совет Фонда",
        },
        {
          icon: "Stock",
          text: "Возможность гибкого формирования корпоративной пенсионной программы",
        },
        {
          icon: "Partner",
          text: "Команда высококлассных специалистов в области управления пенсионными фондами",
        },
      ],
    };
  },
  components: {
    TopMenu,
    TopBlock,
    BusinessProgramm,
    GuiTwoImagesBlock,
    CardList,
    BusinessTaxBlock,
    BusinessCallbackForm,
  },
};
</script>

<style></style>
