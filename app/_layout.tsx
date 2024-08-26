import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./screens/homeScreen";
import { ConnectScreen } from "./screens/connectScreen";
import { BrowseScreen } from "./screens/browseScreen";
import { FilterScreen } from "./screens/filterScreen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="connect" component={ConnectScreen} />
        <Stack.Screen name="browse" component={BrowseScreen} />
        <Stack.Screen name="filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
