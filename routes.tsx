import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useColorScheme} from "react-native";

import darkTheme from "themes/dark-theme";
import defaultTheme from "themes/default-theme";
import HomeScreen from "screens/home/home";
import SignIn from "screens/sign-in/sign-in";
import SignUp from "screens/sign-up/sign-up";

const Stack = createNativeStackNavigator();

const Routes = () => {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer theme={colorScheme === 'dark' ? darkTheme : defaultTheme}>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" options={{title: "Projeto Aliança"}} component={HomeScreen}/>
                <Stack.Screen name="signIn" options={{title: "Entrar"}} component={SignIn}/>
                <Stack.Screen name="signUp" options={{title: "Cadastro"}} component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
