<template>
  <div id="app">
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

<style lang="scss"></style>
