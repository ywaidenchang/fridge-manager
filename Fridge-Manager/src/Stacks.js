import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/CameraScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign: 'center'}} />
      <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Stacks;