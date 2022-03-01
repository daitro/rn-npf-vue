<template>
  <div class="about">
    <TopMenu />
    <TopBlock
      :title-text="title"
      :subtitle-text="subtitle"
      :imagePath="'/images/aboutTopBlock.png'"
    />
    <AboutContent />
    <CardList :cards="cards" :fundBlockTitle="fundBlockTitle" />
  </div>
</template>

<script>
import TopMenu from "../components/app/TopMenu.vue";
import TopBlock from "../components/app/TopBlock.vue";
import AboutContent from "../components/aboutPage/AboutContent.vue";
import CardList from "../components/general/CardList.vue";

export default {
  data() {
    return {
      title: "О фонде",
      subtitle:
        "На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке  негосударственного пенсионного обеспечения (НПО). ",
      fundBlockTitle: "Преимущества Фонда",
      cards: [
        {
          icon: "Calendar",
          header: "17 лет на рынке",
          text: "Фонд основан в 2002 году",
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
    TopMenu,
    TopBlock,
    AboutContent,
    CardList,
  },
};
</script>
