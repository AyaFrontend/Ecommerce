import { ApiKey } from './../app/Models/ApiKey';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_BASE_URL: 'https://route-egypt-api.herokuapp.com/',
  FOOD_BASE_URL : 'https://api.spoonacular.com/recipes/',
  //APIKEY : '528b59abfa77472f98a0ef54a21bbde1',
  //APIKEY : 'e9ccfc2663b34c76b1a22de113b06b0a',
  APIKEY :   'e05d014068154b7f874910071291a1cf',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
