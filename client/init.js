Router.configure({
  layoutTemplate: 'layout',
  i18n: {
    serverSide: true,
    languages: ["en", "fr"],
    defaultLanguage: 'en',
    autoConfLanguage: true,
    _language: null,

    getLanguage: function () {
      if (this._language) {
        return this._language;
      } else {
        return 'en';
      }
    },
    setLanguage: function (lang) {
      this._language = lang;
    },
    langCodeAction: function(lang) {
      TAPi18n.setLanguage(lang);
    }
  }
});

Router.route('/', function () {
  this.render('Home');
}, {
  name: "home" // this name is used in basic.html template. See: {{pathFor 'home'}}
});

Router.route('one', {
  path: '/one',
  i18n: {
    languages: {
      fr: {
        path: '/une'
      }
    }
  }
});

Router.route('two', {
  path: '/two',
  i18n: {
    languages: {
      fr: {
        path: '/deux'
      }
    }
  }
});
