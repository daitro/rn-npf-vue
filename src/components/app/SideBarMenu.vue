<template>
  <aside class="side-bar-menu" id="side-bar">
    <div class="side-bar-menu__container">
      <div class="side-bar-menu__top-block">
        <TripleIcon
          style="margin-right: 12px"
          icon="Cross"
          dark
          @click.native="closeMenu"
        />
        <img src="/logotype/mainLogoColor.svg" alt="" />
      </div>
      <h3 class="side-bar-menu__title">О Фонде</h3>

      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="side-bar-menu__item"
        @click.native="closeMenu"
      >
        {{ route.label }}
      </router-link>

      <h3 class="side-bar-menu__title">Клиентам</h3>
      <div class="side-bar-menu__item" v-for="item in clientsList" :key="item">
        {{ item }}
      </div>
      <div class="side-bar-menu__callback-number">8 800 200-47-66</div>
      <p class="side-bar-menu__bottom-text">
        © 2009-2019 НПФ Ренессанс. Пенсии Лицензия № 383/2 от 16 июня 2009 года
      </p>
    </div>
  </aside>
</template>

<script>
import TripleIcon from "../../components/gui/TripleIcon.vue";

export default {
  data() {
    return {
      routes: [
        {
          label: "На главную",
          path: "/",
        },
        {
          label: "О Фонде",
          path: "/about",
        },
        {
          label: "Инвестиционная деятельность",
          path: "/investing",
        },
        {
          label: "Бизнес",
          path: "/business",
        },
      ],
      clientsList: [
        "Калькулятор",
        "Написать нам",
        "Помощь",
        "Политика конфиденциальности",
      ],
    };
  },
  methods: {
    closeMenu() {
      let sideBar = document.getElementById("side-bar");
      sideBar.style.display = "none";
      window.document.body.style.overflow = "auto";
    },
  },
  components: { TripleIcon },
};
</script>

<style lang="scss" scoped>
.side-bar-menu {
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: #fff;
  box-shadow: 0px 12px 24px rgba(26, 65, 100, 0.24);
  z-index: 5;
  display: none;

  &__container {
    padding: 24px;
  }

  &__top-block {
    display: flex;
  }

  &__title {
    font-size: 16px;
    line-height: 24px;
    color: #b5bdc8;
    padding: 48px 0 24px;
  }

  &__item {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 12px;
    color: #5a646e;
    text-decoration: none;
    display: block;
  }

  &__callback-number {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    margin: 96px 0 48px;
  }

  &__bottom-text {
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
  }
}
</style>
