import {DarkTheme} from "@react-navigation/native";
import {Theme} from "@react-navigation/native/src/types";

const darkTheme: Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#906e4f'
    }
}

export default darkTheme