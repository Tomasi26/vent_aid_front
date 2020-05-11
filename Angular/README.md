# RespiratorFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Debugging Android app

To run live reloading on capacitor app for Android follow the steps below:
1. `ng run vent_aid_front:build && npx cap copy android && npx cap open android` 
(or use the script in package.json).
2. Change the `url` member of node `server: {}` at `capacitor.config.json` to your ip.
3. Run the app from Android Studio to your connected device.
4. Also, run the app locally with you ip as host `ng serve --host='your_ip' --port='prot'`
5. Open Chrome -> navigate to [chrome://inspect/#devices](chrome://inspect/#devices) -> check that `Discover USB devices` is enabled 
and click `port forwarding` -> create a port forwarding rule.
6. Now Chrome should recognize your device and app -> click `inspec` and a new window will open with live reloading.

