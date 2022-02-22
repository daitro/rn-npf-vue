module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/variables/index.scss";',
      },
    },
  },
};
