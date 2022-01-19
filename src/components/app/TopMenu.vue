<template>
  <header
    :class="{
      header: true,
      'header-black': isBlack,
    }"
    id="header"
  >
    <div class="header__inner">
      <nav class="menu">
        <div class="menu__blockStart">
          <GuiTripleIcon
            class="menu__hamburger"
            icon="Hamburger"
            light
            @click.native="openMenu"
          />

          <GuiLogotype
            logotype="mainLogo"
            light
            @click.native="$router.push('/')"
          ></GuiLogotype>
        </div>
        <div class="menu__list">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="menu__item"
          >
            {{ route.label }}
          </router-link>
        </div>

        <div class="menu__blockEnd">
          <div class="contact">
            <div class="contact__number">8 800 200-47-66</div>
            <div class="contact__text">Обратный звонок</div>
          </div>

          <button
            class="login"
            @mouseover="isLoginButtonHovered = true"
            @mouseout="isLoginButtonHovered = false"
          >
            <GuiTripleIcon
              icon="User"
              light
              class="login__user"
              :hovered="isLoginButtonHovered"
            />
            <div class="login__text">Войти</div>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import GuiTripleIcon from "../gui/GuiTripleIcon.vue";
import GuiLogotype from "../gui/GuiLogotype.vue";

export default {
  components: {
    GuiTripleIcon,
    GuiLogotype,
  },
  data() {
    return {
      isLoginButtonHovered: false,
      routes: [
        {
          label: "О фонде",
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
        // {
        //   label: "Контакты",
        //   path: '',
        // },
      ],
      isBlack: false,
    };
  },
  methods: {
    onScrollHandler(event) {
      let windowScrollTop = event.target.documentElement.scrollTop;
      let topBlockHeight = document.getElementById("top-block").clientHeight;
      this.isBlack = windowScrollTop > topBlockHeight;
    },
    openMenu() {
      let sideBar = document.getElementById("side-bar");
      sideBar.style.display = "block";
      window.document.body.style.overflow = "hidden";
    },
  },
  mounted() {
    window.document.addEventListener("scroll", this.onScrollHandler, {
      passive: true,
    });
  },
  beforeDestroyed() {
    window.document.removeEventListener("scroll", this.onScrollHandler);
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.22s;

  &__inner {
    max-width: 1344px;
    width: 100%;
    margin: 0 auto;
    padding: 24px;
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &__blockStart {
    display: flex;
    align-items: flex-start;
  }

  &__blockEnd {
    display: flex;
    align-items: flex-start;
  }

  &__list {
    display: none;
    justify-content: space-between;
    max-width: 666px;
    width: 100%;
    @media screen and (min-width: 1200px) {
      display: flex;
    }
  }

  &__item {
    display: none;
    &:hover {
      color: white;
    }
    @media screen and (min-width: 1200px) {
      display: block;
      font-size: 16px;
      color: #b5bdc8;
      line-height: 24px;
      text-decoration: none;
    }
  }

  &__hamburger {
    display: block;
    margin-right: 12px;
    cursor: pointer;
    @media screen and (min-width: 1200px) {
      display: none;
    }
  }
}

.contact {
  display: none;
  margin-right: 24px;
  @media screen and (min-width: 578px) {
    display: block;
  }

  &__number {
    color: white;
    line-height: 24px;
    &--dark {
      color: #28323c;
    }
  }

  &__text {
    color: #b5bdc8;
    font-size: 11px;
    line-height: 18px;
  }
}

.login {
  display: flex;
  align-items: center;

  &__text {
    display: none;
    color: white;
    line-height: 24px;
    margin-left: 10px;
    @media screen and (min-width: 578px) {
      display: block;
    }
  }
}

.header-black {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
