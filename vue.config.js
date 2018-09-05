module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh-cn',
      fallbackLocale: 'zh-cn',
      localeDir: 'locales',
      enableInSFC: false
    },
    quasar: {
      theme: 'mat',
      rtlSupport: true
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
  ? '/my-app/'
  : '/',
  lintOnSave: false
}
