import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigator = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='move' onPress={()=>{navigator.navigate("Camera")}} />
    </View>
  );
};

export default HomeScreen;