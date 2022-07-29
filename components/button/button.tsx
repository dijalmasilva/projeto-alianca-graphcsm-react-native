import {Pressable, PressableProps, StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from "react-native"
import {useTheme} from "@react-navigation/native";
import {ReactNode} from "react";

type Props = PressableProps & {
    children: ReactNode,
    btStyle: StyleProp<ViewStyle>,
    btText: StyleProp<TextStyle>,
}

const Button = ({children, ...props}: Props) => {
    const combineStyleButton = StyleSheet.flatten([props.btStyle, styles.button])
    const combineStyleText = StyleSheet.flatten([props.btText, styles.btText])

    return (
        <Pressable style={combineStyleButton} onPress={props.onPress} {...props}>
            <Text style={combineStyleText}>{children}</Text>
        </Pressable>
    )
}

export const PrimaryButton = ({children, onPress, ...props}) => {
    const theme = useTheme();

    return (
        <Button onPress={onPress} btStyle={{backgroundColor: theme.colors.primary}}
                btText={{color: theme.colors.card}} {...props}>
            {children}
        </Button>
    )
}

export const BorderButton = ({children, onPress, ...props}) => {
    const theme = useTheme();

    return (
        <Button onPress={onPress}
                btStyle={{backgroundColor: 'transparent', borderColor: theme.colors.primary, borderStyle: "solid", borderWidth: 1}}
                btText={{color: theme.colors.primary}} {...props}>
            {children}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        minWidth: 300,
        width: '100%',
        padding: 16,
        borderRadius: 8,
        marginVertical: 4,
    },
    btText: {
        fontWeight: "bold",
        textTransform: 'uppercase',
        textAlign: "center",
    }
})

export default Button;
