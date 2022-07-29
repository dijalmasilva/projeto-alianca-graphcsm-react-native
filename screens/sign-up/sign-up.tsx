import {ScrollView, StyleSheet, View} from "react-native";
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {useState} from "react";
import ImagePickerType from "models/ImagePickerType";
import MainLayout from "layouts/MainLayout";
import AvatarInput from "components/input/avatar-input";
import Input from "components/input/input";
import {BorderButton} from "components/button/button";
import {printConsole} from "utils/debugger";

const SignUp = () => {
    const [birthday, setBirthday] = useState<string>('')
    const [image, setImage] = useState<ImagePickerType | null>(null)
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const updateBirthday = (event, selectedDate) => {
        printConsole(selectedDate.toString())
        setBirthday(selectedDate.toString())
    }

    const openDatePicker = () => {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange: updateBirthday,
            mode: "date",
        })
    }

    const validateFields = () => {
        if (!username) {
            return 'Voce precisa inserir o nome de usuario.'
        }

        if (!password) {
            return 'Voce precisa criar uma senha.'
        }

        if (!name) {
            return 'Voce precisa inserir o seu nome.'
        }

        return undefined;
    }

    const onSubmit = () => {
        const notValid = validateFields()

        if (!notValid) {
            printConsole({ name, birthday, username, password, image })
        }
    }

    return (
        <ScrollView>
            <MainLayout>
                <AvatarInput onChange={setImage}/>
                <View>
                    <Input autoFocus label="Nome de usuário" placeholder="pedro1" textContentType="nickname" onChangeText={setUsername}/>
                    <Input label="Senha" placeholder="min 8" textContentType="password" secureTextEntry onChangeText={setPassword}/>
                    <Input label="Nome" textContentType="name" placeholder="Simão Pedro" onChangeText={setName}/>
                    <Input value={birthday} onFocus={openDatePicker} label="Data de nascimento" placeholder="dd/mm/yyyy"/>
                    <View style={styles.buttonSubmit}>
                        <BorderButton onPress={onSubmit}> Cadastrar </BorderButton>
                    </View>
                </View>
            </MainLayout>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    buttonSubmit: {
        flex: 1,
        marginBottom: 16,
    }
})

export default SignUp
