import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings136640Navigator from '../features/Settings136640/navigator';
import UserProfile136633Navigator from '../features/UserProfile136633/navigator';
import Settings136632Navigator from '../features/Settings136632/navigator';
import Settings136630Navigator from '../features/Settings136630/navigator';
import SignIn2136628Navigator from '../features/SignIn2136628/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings136640: { screen: Settings136640Navigator },
UserProfile136633: { screen: UserProfile136633Navigator },
Settings136632: { screen: Settings136632Navigator },
Settings136630: { screen: Settings136630Navigator },
SignIn2136628: { screen: SignIn2136628Navigator },

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
