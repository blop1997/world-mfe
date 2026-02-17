const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'countries-mfe',



  exposes: {
    './CountryTrendingCntComponent':'./projects/countries-mfe/src/app/features/countries/components/trending/container/country-trending-cnt/country-trending-cnt.component.ts',
    './CountryTopCtnComponent':'./projects/countries-mfe/src/app/features/countries/components/tops/container/country-top-ctn/country-top-ctn.component.ts',
    './routes':'./projects/countries-mfe/src/app/app.routes.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
});
