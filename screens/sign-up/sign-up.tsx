import {ScrollView, StyleSheet, View} from "react-native";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/input/input";
import AvatarInput from "../../components/input/avatar-input";
import {BorderButton} from "../../components/button/button";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {useState} from "react";

const SignUp = () => {
    const [birthday, setBirthday] = useState('')

    const updateBirthday = (event, selectedDate) => {
        event.preventDefault();
        setBirthday(selectedDate.toString())
    }

    const openDatePicker = () => {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange: updateBirthday,
            mode: "date",
        })
    }

    return (
        <MainLayout>
            <ScrollView>
                <AvatarInput/>
                <Input autoFocus label="Nome de usuário" placeholder="pedro1" textContentType="nickname"/>
                <Input label="Senha" placeholder="min 8" textContentType="password" secureTextEntry/>
                <Input label="Nome" textContentType="name" placeholder="Simão Pedro"/>
                <Input defaultValue={birthday} onFocus={openDatePicker} label="Data de nascimento" placeholder="dd/mm/yyyy"/>
                <View style={styles.buttonSubmit}>
                    <BorderButton> Cadastrar </BorderButton>
                </View>
            </ScrollView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    buttonSubmit: {
        flex: 1,
        marginBottom: 16,
    }
})

export default SignUp
