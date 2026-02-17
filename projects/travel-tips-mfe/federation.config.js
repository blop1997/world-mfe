const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'travel-tips-mfe',



  exposes: {
    './routes':'./projects/travel-tips-mfe/src/app/app.routes.ts',
    './TravelTipsCtnComponent': './projects/travel-tips-mfe/src/app/features/travel-tips/components/container/travel-tips-ctn/travel-tips-ctn.component.ts',

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'library-mfe': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }
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
