import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'

const Stack = createStackNavigator();
export default function AboutStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                headerShown:false,
                headerStyle: {
                    backgroundColor: "#eee",
                    height: 60
                },
                headerTintColor: '#444'
            }}>
                <Stack.Screen name="About" component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
