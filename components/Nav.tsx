import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function Nav() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Welcome">
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
