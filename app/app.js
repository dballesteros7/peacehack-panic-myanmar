import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import rootComponent from './root';


require('angular-material/angular-material.css');

angular.module('myanmarApp', [
  ngCookies, ngResource, ngSanitize, ngAnimate, ngMaterial
]).component('root', rootComponent);

angular.element(document)
    .ready(() => {
      angular.bootstrap(document, ['myanmarApp'], {
        strictDi: true
      });
    });
