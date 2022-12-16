// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseHost: '../../assets/mocks',
  baseUrl: '',
  TOKEN_KEY: '',
  authorizationBasic: '',
  redirectUri: "http://localhost:4200/oauth",
  clientId: 'jewellery-store',
  scope: '',
  issuer: 'user1',
  headerColor: '#258900'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
