# VentAid
TODO

## Installation
To install all node modules, go to Cordova folder (`cd Cordova/`) and run Node Package Manager (`npm install`).
Same in Angualr folder (`cd ../Angular/` and then `npm install`).

Then, we need to build the Angular project for the first time before we build Capacitor's ios/android platforms: `ng run vent_aid_front:build`

## Serve Angular
Angular is a web application framework by google. This project is built in Angular.

To build and serve the web app, just go to Angular folder (`cd Angular/`) and run `npm start` (which is equal to `ng serve --ssl`). 

Your webapp is served at "http**s**://localhost:4200"

## Build Capacitor
You can use Ionic's Capacitor to wrap the Angular project within a native app. To generate Android studio or Xcode project, simply go to `cd Angular/` and add the platform you want (ios/android):

`npx cap add [platform](ios/adnroid?)`

Builds is in `Angular/ios` or `Angular/android`

## Build Cordova
You can also use Apache's Cordova to wrap the Angular project within a native app too. To generate .apk or Xcode project, simply go to `cd Cordova/` and build the platform you want (ios/android):

`cordova build [platform](ios/adnroid?)`

Builds is in `Cordova/Platform/ios` or `Cordova/Platform/android`



