<template>
  <aside class="side-bar-menu" id="side-bar">
    <div class="side-bar-menu__container">
      <div class="side-bar-menu__top-block">
        <GuiTripleIcon
          class="side-bar-menu__icon"
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

      <div class="side-bar-menu__callback-number">8 800 200-47-66</div>
      <p class="side-bar-menu__bottom-text">
        © 2009-2019 НПФ Ренессанс. Пенсии Лицензия № 383/2 от 16 июня 2009 года
      </p>
    </div>
  </aside>
</template>

<script>
import GuiTripleIcon from "../../components/gui/GuiTripleIcon.vue";

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
        {
          label: "Новости",
          path: "/news",
        },
        {
          label: "Калькулятор",
          path: "/#calculator-block",
        },
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
  components: { GuiTripleIcon },
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

  &__icon {
    margin-right: 12px;
  }

  &__top-block {
    display: flex;
  }

  &__title {
    font-size: 16px;
    line-height: 24px;
    color: $gray4;
    padding: 48px 0 24px;
  }

  &__item {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 12px;
    color: $gray1;
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
    color: $gray1;
  }

  .router-link-exact-active {
    color: $gray3;
  }
}
</style>
