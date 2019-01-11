/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GoogleMap from "./Googlemap";
import styleGooglemap from './styleGooglemap';
AppRegistry.registerComponent(appName, () => GoogleMap);
