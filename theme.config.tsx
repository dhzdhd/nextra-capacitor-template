// Check out https://nextra.site/docs/docs-theme/start for more info

export default {
  logo: <span>Notes</span>,
  useNextSeoProps: () => {
    titleTemplate: "%s";
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Change meta as per your needs*/}
      <meta property="og:title" content="Notes" />
      <meta property="og:description" content="Notes" />
    </>
  ),
  primaryHue: 178, // See docs for all possible hues
  sidebar: {
    toggleButton: true,
  },
  navigation: true,
  footer: {
    text: "<footer_text>",
  },
  faviconGlyph: "📓",
};
