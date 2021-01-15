import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile193672Navigator from '../features/UserProfile193672/navigator';
import Tutorial193671Navigator from '../features/Tutorial193671/navigator';
import NotificationList193643Navigator from '../features/NotificationList193643/navigator';
import Settings193642Navigator from '../features/Settings193642/navigator';
import Settings193634Navigator from '../features/Settings193634/navigator';
import UserProfile193632Navigator from '../features/UserProfile193632/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile193672: { screen: UserProfile193672Navigator },
Tutorial193671: { screen: Tutorial193671Navigator },
NotificationList193643: { screen: NotificationList193643Navigator },
Settings193642: { screen: Settings193642Navigator },
Settings193634: { screen: Settings193634Navigator },
UserProfile193632: { screen: UserProfile193632Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
