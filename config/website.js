const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  siteTitle: 'TecNerd - Gatsby Landing Page', // Navigation and Site Title
  siteTitleAlt: 'TecNerd', // Alternative Site title for SEO
  siteTitleShort: 'TecNerd', // short_name for manifest
  siteHeadline: 'Pagina de presentacion del evento', // Headline for schema.org JSONLD
  siteLanguage: 'es', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Pagian informativa para el evento TecNerd',
  author: 'jr Bogarin', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@bogarin', // Twitter Username
  ogSiteName: 'bogarin', // Facebook Site Name
  ogLanguage: 'es_MX', // Facebook Language
  //googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
