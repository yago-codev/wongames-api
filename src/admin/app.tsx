import Icon from './extensions/icon.png'
import Logo from './extensions/logo.svg'

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Icon,
    },
    locales: [],
    translations: {
      en: {
        'Auth.form.welcome.title': 'Bem-vindo a Won Games',
        'Auth.form.welcome.subtitle': 'Faça login em sua conta',
        'app.components.LeftMenu.navbrand.title': 'Dashboard',
      }
    },
    menu: {
      logo: Logo,
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#030415",
          primary600: "#f231a5",
          primary700: "#f231a5",
          neutral0: "#0d102f",
          neutral100: "#030415",
        }
      }
    }
  },
  bootstrap() {},
};
