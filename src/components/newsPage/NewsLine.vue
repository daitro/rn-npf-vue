<template>
  <div class="news-line">
    <GuiRadioGroup
      :radioGroupYears="radioGroupYears"
      :name="nameRadioGroup"
      v-model="choosedYear"
    ></GuiRadioGroup>

    <section class="news-line__container">
      <div class="news-line__items">
        <GuiPreloader v-if="show" />
        <NewsList
          v-else
          :generalListOfNews="filteredNewsByYear"
          :newsListDefault="newsListDefault"
        />
      </div>
      <aside class="contact-information">
        <h3 class="contact-information__title">Контакты пресс-службы</h3>
        <p class="contact-information__text">
          115114, Россия, Москва, Дербеневская набережная, 7, стр. 22, подъезд
          B, 3 этаж
        </p>
        <p class="contact-information__text">Телефон: 8 (495) 933-4766</p>
      </aside>
    </section>
  </div>
</template>

<script>
import GuiRadioGroup from "../gui/GuiRadioGroup.vue";
import NewsList from "../general/NewsList.vue";
import GuiPreloader from "../gui/GuiPreloader.vue";

export default {
  data() {
    return {
      nameRadioGroup: "years",
      choosedYear: "2021",
      newsListDefault: true,
    };
  },
  computed: {
    newsList() {
      return this.$store.getters["news/sortedByDateNews"];
    },

    show() {
      return this.$store.state.news.isLoading;
    },

    radioGroupYears() {
      // Нужно получить массив [2015, 2016, 2017...]
      return (
        this.newsList
          //отфильтруем массив всех новостей и получим из свойства date только дату
          .map((news) => {
            return String(new Date(news.date).getFullYear());
          })

          //сделаем массив уникальным
          .filter((year, index, arr) => {
            return arr.indexOf(year) === index;
          })

          //создадим массив объектов (с данными для радио-кнопок)
          .map((year) => {
            return {
              value: year,
              label: year,
            };
          })
      );
    },

    filteredNewsByYear() {
      return this.newsList.filter((news) => {
        return this.choosedYear === String(new Date(news.date).getFullYear());
      });
    },
  },

  components: {
    GuiRadioGroup,
    NewsList,
    GuiPreloader,
  },
};
</script>

<style lang="scss" scoped>
.news-line {
  max-width: 960px;
  margin: 0 auto;
  padding: 68px 24px 72px;

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__items {
    max-width: 456px;
  }
}

.new-item {
  padding: 24px 0 48px;
  cursor: pointer;
  &:hover > &__title {
    color: #802be0;
  }

  &:not(&:last-child) {
    border-bottom: 1px solid $gray5;
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: $primary;
    margin-bottom: 24px;
  }

  &__text {
    font-size: 13px;
    line-height: 24px;
    color: $gray1;
  }
}

.contact-information {
  padding-top: 24px;
  margin-left: 72px;

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    color: $gray1;
    padding: 24px 0 0;
  }
}
</style>
