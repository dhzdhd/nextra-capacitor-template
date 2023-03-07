import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  staticImage: true,
});

export default withNextra({
  images: {
    unoptimized: true,
  },
});
