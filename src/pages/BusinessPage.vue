<template>
  <div class="business-page">
    <TopBlock
      :title-text="title"
      :subtitle-text="subtitle"
      :imagePath="'/images/businessTopBlock.jpg'"
    />
    <BusinessProgramm />
    <TwoImageBlock :firstImg="firstImg" :secondImg="secondImg" />
    <AboutFundBlock :fundBlockTitle="fundBlockTitle" :cards="cards" />
    <BusinessTaxBlock />
    <ApplicationForm />
  </div>
</template>

<script>
import TopBlock from "../components/app/TopBlock.vue";
import BusinessProgramm from "../components/businessPage/BusinessProgramm.vue";
import TwoImageBlock from "../components/businessPage/TwoImageBlock.vue";
import AboutFundBlock from "../components/app/AboutFundBlock.vue";
import BusinessTaxBlock from "../components/businessPage/BusinessTaxBlock.vue";
import ApplicationForm from "../components/businessPage/ApplicationForm.vue";

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
    TopBlock,
    BusinessProgramm,
    TwoImageBlock,
    AboutFundBlock,
    BusinessTaxBlock,
    ApplicationForm,
  },
};
</script>

<style></style>
