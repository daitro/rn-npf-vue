<template>
  <div class="top-block">
    <TopMenu></TopMenu>
    <div class="main">
      <div class="main__container">
        <h1 class="title">{{ titleText }}</h1>
        <h3 class="sub-title">{{ subtitleText }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";

export default {
  props: ["titleText", "subtitleText"],
  components: {
    TopMenu,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-image: url("../assets/images/IndexMain.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  &__container {
    max-width: 964px;
    width: 100%;
    margin: 0 auto;
    padding: 120px 24px 64px;

    @media screen and (min-width: 768px) {
      padding: 360px 24px 144px;
    }
  }
}
</style>
