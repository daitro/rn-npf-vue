<template>
  <div class="app" id="app">
    <TopMenu></TopMenu>
    <router-view />
    <FooterBlock></FooterBlock>
    <SideBarMenu></SideBarMenu>
  </div>
</template>

<script>
//@ - это /src
import FooterBlock from "@/components/app/FooterBlock.vue";
import SideBarMenu from "@/components/app/SideBarMenu.vue";
import TopMenu from "@/components/app/TopMenu.vue";

export default {
  components: {
    FooterBlock,
    SideBarMenu,
    TopMenu,
  },
};
</script>

<style lang="scss" scoped>
.app {
  max-width: 1440px;
  margin: 0 auto;
  box-shadow: 0px 0px 6px 2px #d2dce6;
}
</style>
