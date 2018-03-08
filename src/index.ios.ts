import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

//console.disableYellowBox = true;
registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/icon.png'),
      selectedIcon: require('./img/icon.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/icon.png'),
      selectedIcon: require('./img/icon.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});