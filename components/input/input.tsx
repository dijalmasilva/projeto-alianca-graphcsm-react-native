import {StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import {useTheme} from "@react-navigation/native";

type Props = TextInputProps;

const Input = ({
   style,
   defaultValue,
   value,
   onFocus,
   label,
   placeholder,
   secureTextEntry,
   textContentType,
   onChangeText,
   children,
   autoFocus,
   ...props
}: Props) => {
    const theme = useTheme();

    const combineStyle = StyleSheet.flatten([
        {backgroundColor: theme.colors.border, color: theme.colors.text},
        styles.input,
        style
    ])

    const combineStyleText = StyleSheet.flatten([
        {color: theme.colors.text},
        styles.text
    ])

    return (
        <View>
            <Text style={combineStyleText}>{label}:</Text>
            <TextInput autoFocus={autoFocus} onFocus={onFocus} defaultValue={defaultValue} value={value}
                       placeholder={placeholder}
                       placeholderTextColor={`rgba(255, 255, 255, ${theme.dark ? '.3' : '0.6'})`}
                       secureTextEntry={secureTextEntry} textContentType={textContentType} onChangeText={onChangeText}
                       style={combineStyle} {...props}>{children}</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    text: {
        flex: 1,
        fontSize: 16,
        marginVertical: 2,
    },
    input: {
        flex: 1,
        padding: 16,
        width: '100%',
        marginBottom: 16,
        fontSize: 16,
        borderRadius: 8,
    }
})

export default Input