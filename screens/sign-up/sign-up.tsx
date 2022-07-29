import {ScrollView, StyleSheet, View} from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {useState} from "react";
import ImagePickerType from "models/ImagePickerType";
import MainLayout from "layouts/MainLayout";
import AvatarInput from "components/input/avatar-input";
import Input from "components/input/input";
import {BorderButton} from "components/button/button";

const SignUp = () => {
    const [birthday, setBirthday] = useState<string>('')
    const [image, setImage] = useState<ImagePickerType | null>(null)
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

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
                <AvatarInput onChange={setImage}/>
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
