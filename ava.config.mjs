export default {
  files: ["**/*.spec.ts"],
  typescript: {
    rewritePaths: {
      "src/": "dist/",
    },
    compile: false,
  },
};
