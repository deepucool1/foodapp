import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import searchscreen from './src/screens/searchscreen'


const navigator = createStackNavigator(
  {
    search: searchscreen
  },
  {
    initialRouteName: 'search',
    defaultNavigationOptions: {
      title: 'Businnes Search',
    }
  }
);

export default createAppContainer(navigator);
