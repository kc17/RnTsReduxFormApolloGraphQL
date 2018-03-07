import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
registerScreens(); // this is where you register all of your app's screens
// start the app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'One',
            screen: 'example.FirstTabScreen',
            icon: require('./img/icon.png'),
            selectedIcon: require('./img/icon.png'),
            title: 'Screen One'
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            icon: require('./img/icon.png'),
            selectedIcon: require('./img/icon.png'),
            title: 'Screen Two'
        }
    ]
});
//# sourceMappingURL=index.android.js.map