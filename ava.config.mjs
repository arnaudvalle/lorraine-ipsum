export default {
  files: ["**/*.spec.mts"],
  typescript: {
    rewritePaths: {
      "src/": "dist/",
    },
    compile: false,
  },
};
