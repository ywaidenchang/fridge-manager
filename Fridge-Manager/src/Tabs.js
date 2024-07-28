import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './screens/CameraScreen';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import { Entypo } from '@expo/vector-icons';

const Tabs = () => {
  Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Camera">
      <Tab.Screen 
        name="Home"
        component={HomeScreen} 
        options={{
          title: "홈",
          headerTitleAlign: 'center',
          tabBarIcon: () => {
            <Entypo name="home" />
          }
        }} />
      <Tab.Screen name="Camera" component={CameraScreen} options={{headerShown: false}} />
      <Tab.Screen name="Add" component={AddScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;