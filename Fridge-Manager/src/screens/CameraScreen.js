import { View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState } from 'react';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} />
    </View>
  );
};

export default CameraScreen;