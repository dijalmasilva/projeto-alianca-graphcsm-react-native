import {DefaultTheme} from "@react-navigation/native";
import {Theme} from "@react-navigation/native/src/types";

const defaultTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#6b0f0f",
    }
}

export default defaultTheme