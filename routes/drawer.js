import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();
export default function DrawerStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} options={{title:'GameZone'}}/>
        <Drawer.Screen name="About" component={AboutStack} options={{title:'About GameZone'}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}