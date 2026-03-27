/**
 import 'react-native-url-polyfill/auto';
import process from 'process';

if (typeof global.process === 'undefined') {
  global.process = process;
} else {
  Object.assign(global.process, process);
}

/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent('main', () => App);
