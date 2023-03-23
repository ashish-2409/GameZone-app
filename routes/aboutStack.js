import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'

const Stack = createStackNavigator();
export default function AboutStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: "#eee",
                    height: 60
                },
                headerTintColor: '#444'
            }}>
                <Stack.Screen name="About" component={About} options={{ title: "About GameZone" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
