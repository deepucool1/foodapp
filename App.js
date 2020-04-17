import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import searchscreen from './src/screens/searchscreen'
import searchbar from "./src/components/searchbar"

const navigator = createStackNavigator(
  {
    search: searchscreen,
    bar: searchbar
  },
  {
    initialRouteName: 'search',
    defaultNavigationOptions: {
      title: 'Businnes Search',
    }
  }
);

export default createAppContainer(navigator);
