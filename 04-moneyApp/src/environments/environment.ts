// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyAAvQS9x7PRpY9OmyEz7KvlC_OYvT0TrGA",
     authDomain: "money-app-a95f8.firebaseapp.com",
     databaseURL: "https://money-app-a95f8.firebaseio.com",
     projectId: "money-app-a95f8",
     storageBucket: "money-app-a95f8.appspot.com",
     messagingSenderId: "236505326388"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
