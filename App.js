import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen/ComponentScreen';
import FlatListComponent from './src/screens/FlatListComponent/FlatListComponent';
import ImageScreen from './src/screens/ImageScreen/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component:ComponentScreen,
    ListData:FlatListComponent,
    Image:ImageScreen,
    Color:ColorScreen,
    Counter:CounterScreen,
    Square:SquareScreen,
    Text:TextScreen ,
    Box:BoxScreen
  },
  {
    initialRouteName: "Home",
    // initialRouteName: "Component",
     // initialRouteName: "ListData",
    defaultNavigationOptions: {
      title: "AppBar"
    }
  }
);

export default createAppContainer(navigator);
