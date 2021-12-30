<template>
  <section class="about-content">
    <div class="about-content__text-block">
      <p class="about-content__text">
        Мы являемся одним из немногих безотраслевых фондов, что позволяет нам
        вести абсолютно прозрачную и независимую инвестиционную политику в
        отношении наших клиентов и занимать лидирующие позиции на протяжении
        последних 15 лет. Акционерами Фонда являются: ООО "Велби Холдинг" и АО
        СК "Ренессанс здоровье".
      </p>
      <p class="about-content__text">
        Акционерами Фонда являются: ООО "Велби Холдинг" и АО СК "Ренессанс
        здоровье".
      </p>
    </div>
    <div class="timeline-carousel">
      <div class="timeline-carousel__header-block">
        <h3 class="timeline-carousel__title">История фонда</h3>
        <div class="group-icon">
          <TripleIcon
            @click.native="onClickPrevSlide"
            icon="ArrowRight"
            dark
            style="transform: scale(-1, 1)"
          />
          <TripleIcon @click.native="onClickNextSlide" icon="ArrowRight" dark />
        </div>
      </div>
      <div
        class="timeline-carousel__visible-block"
        :style="{ left: sliderOffsetLeft + 'px' }"
      >
        <div class="timeline-carousel__hidden-block">
          <div
            v-for="(item, index) in historyList"
            :key="index"
            class="timeline-carousel__item"
            :class="{
              'timeline-carousel__item_active':
                index === sliderActive || index === sliderActive - 1,
            }"
          >
            <div class="timeline-carousel__year">{{ item.year }}</div>
            <div class="timeline-carousel__line"></div>
            <p class="timeline-carousel__text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TripleIcon from "../gui/TripleIcon.vue";

export default {
  data() {
    return {
      sliderAllCount: 4,
      sliderActive: 1,
      sliderOffsetLeft: 0,
      sliderOffsetStep: 0,
      historyList: [
        {
          year: "2002",
          text: "Дата основания фонда как части финансовой группы ING в Росии. Уже в 2003 году в Фонд приходят первые крупные клинеты, что дает Фонду существенный толчок к развитию и сделало его привлекательным в глазах будущих партнеров.",
        },
        {
          year: "2008",
          text: "Клиентами Фонда стали более 70 наших текущих партнеров.",
        },
        {
          year: "2010",
          text: "В связи с изменением бизнес стратегии компании ING в России, фонд был выкуплен крупнейшей Британской страховой компанией AVIVA, что только лишь усилило позиции Фонда.",
        },
        {
          year: "2020",
          text: "Дата основания фонда как части финансовой группы ING в Росии. Уже в 2003 году в Фонд приходят первые крупные клинеты, что дает Фонду существенный толчок к развитию и сделало его привлекательным в глазах будущих партнеров.",
        },
      ],
    };
  },
  methods: {
    openSlide(sliderIndex) {
      let slider = document.querySelector(".timeline-carousel__item");
      this.sliderOffsetStep = slider.clientWidth;

      if (sliderIndex > 0 && sliderIndex <= this.sliderAllCount) {
        this.sliderActive = sliderIndex;
        this.sliderOffsetLeft = -(
          this.sliderActive * this.sliderOffsetStep -
          this.sliderOffsetStep
        );
      }
    },

    onClickNextSlide() {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1;
        this.openSlide(this.sliderActive);
      }
    },

    onClickPrevSlide() {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1;
        this.openSlide(this.sliderActive);
      }
    },
  },
  components: {
    TripleIcon,
  },
};
</script>

<style lang="scss" scoped>
.about-content {
  &__text-block {
    max-width: 960px;
    margin: 0 auto;
    padding: 72px 24px;
  }
  &__text {
    max-width: 760px;
    font-size: 16px;
    line-height: 24px;
    color: #78828c;
    margin-bottom: 24px;
  }
}

.timeline-carousel {
  margin-bottom: 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  &__header-block {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  &__visible-block {
    white-space: nowrap;
    width: 100%;
    max-width: 960px;
    padding: 24px;
    margin: 0 auto;
    position: relative;
    transition: all 0.5s ease;
  }

  &__hidden-block {
    display: inline-flex;
    position: relative;
    left: 0;
  }

  &__item {
    max-width: 500px;
    white-space: normal;
    opacity: 0.5;

    &_active {
      opacity: 1;
    }
  }

  &__year {
    font-size: 34px;
    line-height: 48px;
    font-weight: 500;
  }

  &__line {
    border-top: 1px solid #e4e4e4;
    margin: 24px 0;
    position: relative;
    width: 100vw;

    &::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      bottom: -4px;
    }
  }

  &__text {
    padding-right: 72px;
    font-size: 16px;
    line-height: 24px;
    color: #78828c;

    @media screen and (min-width: 768px) {
      padding-right: 140px;
    }
  }
}
</style>
