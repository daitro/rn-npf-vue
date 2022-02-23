module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/variables/index.scss";',
      },
    },
  },
};
