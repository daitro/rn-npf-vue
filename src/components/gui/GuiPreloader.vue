<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <img class="preloader__img" src="../../../public/loader.svg" alt="" />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    show: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $white;

  &__img {
    animation: 1s linear 0s normal none infinite running rot;
    width: 48px;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
