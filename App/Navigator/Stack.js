import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen} from '../Screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import CreateEstate from "../Screens/CreateEstate";

const stack = createStackNavigator();
export function StackNavigator() {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen Name="HomeScreen" Component={HomeScreen} />
            <Stack.Screen Name="CreatedEstate" Component={CreateEstate} />
            <Stack.Screen Name=" Profile " Component={ Profile } />
            <Stack.Screen Name="Login" Component={Login} />
        
        </Stack.Navigator>
       </NavigationContainer>
    )
}