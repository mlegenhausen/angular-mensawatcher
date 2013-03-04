angular-foodwatcher
===================

Angular.JS App of the [Android Foodwatcher Application](https://code.google.com/p/foodwatcher/).

This Application is used for educational purpose and should show some best practices when working with Angular.JS, Grunt, yeoman.

# Howto Build

## Prerequirements

 * [node.js](http://www.nodejs.org/) >= 0.8
 * [yeoman](http.//http://yeoman.io/)
 * [testacular](http://testacular.github.com/)

You can install yeoman via `npm`:

```
npm install yeoman -g
```

## Run it locally

```
git clone https://github.com/mlegenhausen/angular-foodwatcher.git
cd angular-foodwatcher
yeoman server
```

yeoman will automatically run a local webserver and opens a browser window with the angular-foodwatcher app in it.

All changes made locally to the code will result in a automatic reload of the browser window.

## Deploy it

If want to run your own instance of the angular-foodwatcher app, you can build your own version via:

```
yeoman build
```

A deployable version will be created in the `dist` directory. Copy it to any server that can serve static files. There are now special server environments needed.

# Used libraries

 * [Angular.JS](http://angularjs.org/) for Depdency Injection, App Modularization and Two-Way-Databinding
 * [bootstrap](http://twitter.github.com/bootstrap/) for a fancy UI
 * [bootstrap-ui](http://angular-ui.github.com/bootstrap/) for the integration of bootstrap with Angular.JS.
 * [Lawnchair](http://brian.io/lawnchair/) for caching of the mensa data.
 * [moment.js](http://momentjs.com/) for easier Date handling.

# TODOs

 * _Upgrade yeoman to 1.0_
 * Write more unit tests
 * Better documentation
 * Make a Chrome App out of it
 * Add response design (Bootstrap 3.0)