<template>
  <div>
    <TopBlock
      :title-text="title"
      :subtitle-text="subtitle"
      :imagePath="'/images/IndexMain.jpg'"
    />
    <TitleBlock></TitleBlock>
    <ForBusinessBlock></ForBusinessBlock>
    <CardList :fundBlockTitle="fundBlockTitle" :cards="cards"></CardList>
    <CalculatorBlock></CalculatorBlock>
    <NewsCarouselBlock :newsList="newsList"></NewsCarouselBlock>
  </div>
</template>

<script>
import TopBlock from "../components/app/TopBlock.vue";
import TitleBlock from "../components/homePage/TitleBlock.vue";
import ForBusinessBlock from "../components/homePage/ForBusinessBlock.vue";
import CardList from "../components/general/CardList.vue";
import CalculatorBlock from "../components/homePage/CalculatorBlock.vue";
import NewsCarouselBlock from "../components/homePage/NewsCarouselBlock.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "Уверенность в будущем, доступная каждому",
      subtitle:
        "Обеспечьте себе стабильность и приступайте к реализации своих самых смелых планов!",
      newsList: [
        {
          title: "АО НПФ «Ренессанс пенсии» развивает сотрудничество с ВТБ",
          text: "С целью проведения расчетов организован трехсторонний электронный документооборот при участии ЗАО ВТБ Специализированный депозитарий",
          date: "21 июня 2019",
        },
        {
          title: "Стратегия для пенсионера",
          text: "Пять финансовых продуктов, которые помогут сохранить и увеличить доход после выхода на пенсию.",
          date: "5 июня 2019",
        },
        {
          title: "АО НПФ «Ренессанс пенсии» развивает сотрудничество с ВТБ",
          text: "С целью проведения расчетов организован трехсторонний электронный документооборот при участии ЗАО ВТБ Специализированный депозитарий",
          date: "21 июня 2019",
        },
        {
          title: "АО НПФ «Ренессанс пенсии» развивает сотрудничество с ВТБ",
          text: "С целью проведения расчетов организован трехсторонний электронный документооборот при участии ЗАО ВТБ Специализированный депозитарий",
          date: "21 июня 2019",
        },
      ],
      fundBlockTitle: "Фонд в цифрах",
      cards: [
        {
          icon: "Calendar",
          header: "17 лет на рынке",
          text: "Фонд основан в 2002 году",
        },
        {
          icon: "High Rate",
          header: "Высокий рейтинг",
          text: "Надежность ruАА- по оценке Эксперт РА",
        },
        {
          icon: "Users",
          header: "41 000 человек",
          text: "участники пенсионной программы",
        },
        {
          icon: "Partner",
          header: "150 компаний",
          text: "заботятся о пенсиях сотрудников",
        },
        {
          icon: "Bank",
          header: "17 млрд рублей",
          text: "пенсионных резервов в Фонде",
        },
      ],
    };
  },
  components: {
    TopBlock,
    TitleBlock,
    ForBusinessBlock,
    CardList,
    CalculatorBlock,
    NewsCarouselBlock,
  },
};
</script>

<style lang="scss" scoped></style>
