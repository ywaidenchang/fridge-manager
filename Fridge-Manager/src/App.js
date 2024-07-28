import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tabs />
    </NavigationContainer>
  );
};

export default App;