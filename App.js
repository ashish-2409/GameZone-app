import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { Text,View } from 'react-native';
import {AppLoading} from 'expo';
import DrawerStack from './routes/drawer';


const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(true);

  if (fontsLoaded) {
      return (
        <DrawerStack/>
      )
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={()=>console.log('error')}
      />
    )
  }
}