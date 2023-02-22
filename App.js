import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,Touch, Button,Alert, Platform, StatusBar} from 'react-native';
const ImageUrl = require('./assets/splash.png')
import TextInputs from './TextInputs';
import Lists from './Lists';


export default function App() {
  const [isClick, setIsClick] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
        <Lists />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: StatusBar.currentHeight || 0,
  }
});
