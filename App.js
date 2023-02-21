import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,Touch, Button,Alert, Platform, StatusBar} from 'react-native';
const ImageUrl = require('./assets/splash.png')
import TextInputs from './TextInputs';
export default function App() {
  const [isClick, setIsClick] = useState(false)
  return (
    <View style={styles.container}>
        <TextInputs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 50,
  }
});
