import {ScrollView, StyleSheet} from "react-native";
import {useState} from "react";
import {PrimaryButton} from "../../components/button/button";
import Input from "../../components/input/input";
import MainLayout from "../../layouts/MainLayout";

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {
        console.log('asasd')
    }

    return (
        <MainLayout>
            <ScrollView style={styles.container}>
                <Input autoFocus label="Nome de usuário" placeholder="pedro1" textContentType="nickname"/>
                <Input label="Senha" placeholder="min 8" textContentType="password" secureTextEntry/>
                <PrimaryButton onPress={signIn}>Entrar</PrimaryButton>
            </ScrollView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    }
})

export default SignIn
