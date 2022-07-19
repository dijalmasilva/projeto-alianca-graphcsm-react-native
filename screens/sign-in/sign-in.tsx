import {Text, View, Image, TextInput} from "react-native";
import {useState} from "react";

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={{ flex: 1 }}>
           <TextInput onChangeText={setUsername} placeholder="Nome de usuário" />
           <TextInput onChangeText={setPassword} placeholder="Senha" textContentType="password" />

        </View>
    )
}

export default SignIn
