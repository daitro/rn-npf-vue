<template>
  <header class="header" id="header">
    <div class="header__inner">
      <nav class="menu">
        <div class="menu__blockStart">
          <img
            class="menu__gamburger"
            src="../assets/icons/gamburgerLight.svg"
            alt=""
          />
          <img
            class="menu__logo"
            src="../assets/logotype/mainLogoWb.svg"
            alt=""
          />
        </div>
        <ul class="menu__list">
          <li v-for="item in items" :key="item" class="menu__item">
            {{ item }}
          </li>
        </ul>

        <div class="menu__blockEnd">
          <div class="contact">
            <div class="contact__number">8 800 200-47-66</div>
            <div class="contact__text">Обратный звонок</div>
          </div>
          <div class="login">
            <img class="login__user" src="../assets/icons/user.svg" alt="" />
            <div class="login__text">Войти</div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "О фонде",
        "Инвестиционная деятельность",
        "Бизнес",
        "Поддержка",
        "Контакты",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;

  &__inner {
    max-width: 1344 px;
    width: 100%;
    margin: 0 auto;
    padding: 24px;
  }
}
</style>
