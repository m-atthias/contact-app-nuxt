export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'contact-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-toast-notification.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    "@nuxtjs/svg",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        name: 'EN'
      },
      {
        code: 'nl',
        name: 'NL'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          intro: 'Easily manage your work and private contacts',
          subheading: 'View your already registered contacts',
          myContacts: 'My Contacts',
          here: 'here',
          loading: 'Loading...',
          contactKind: 'What kind of contact do you want to add?',
          contactLoadingFailed: 'We\'re sorry, we\'re not able to retrieve this information at the moment, please try back later',
          enterName: 'Enter name...',
          contactNameLabel: 'Name',
          contactTypePrivateLabel: 'Private Contact',
          contactTypeWorkLabel: 'Work Contact',
          contactEmailLabel: 'Email',
          contactPhoneLabel: 'Phone',
          contactTypeLabel: 'Type of contact?',
          contactTypeSimpleLabel: 'Simple',
          contactTypeAdvancedLabel: 'Advanced',
          formSubmit: 'Create',
          contactCreateHeading: 'Create new contact',
          invalidEmail: 'Please enter a valid email.',
          invalidPhone: 'Please enter a valid phone number.',
          contactCreated: 'Contact created!',
          contactList: 'My Contacts',
          homeNav: 'Home',
          myContactsNav: 'My Contacts',
        },
        nl: {
          intro: 'Gemakkelijk je werk en privé contacten beheren',
          subheading: 'Bekijk je reeds geregistreerde contacten',
          myContacts: 'Mijn Contacten',
          here: 'hier',
          loading: 'Laden...',
          contactKind: 'Wat voor contact wil je toevoegen?',
          contactLoadingFailed: 'Het spijt ons, we kunnen op dit moment deze informatie niet opvragen, probeer het later nog een keer.',
          enterName: 'Vul je naam in...',
          contactNameLabel: 'Naam',
          contactTypePrivateLabel: 'Privé Contact',
          contactTypeWorkLabel: 'Werk Contact',
          contactEmailLabel: 'E-mail',
          contactPhoneLabel: 'Telefoon',
          contactTypeLabel: 'Wat voor contact?',
          contactTypeSimpleLabel: 'Simpel',
          contactTypeAdvancedLabel: 'Geavanceerd',
          formSubmit: 'Aanmaken',
          contactCreateHeading: 'Maak nieuw contact aan',
          invalidEmail: 'Vul een geldig e-mailadres in.',
          invalidPhone: 'Vul een geldig telefoonnummer in.',
          contactCreated: 'Contact aangemaakt!',
          contactList: 'Mijn Contacten',
          homeNav: 'Home',
          myContactsNav: 'Mijn Contacten',
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
  serverMiddleware: [
    '~/api/index.js'
  ]
}
