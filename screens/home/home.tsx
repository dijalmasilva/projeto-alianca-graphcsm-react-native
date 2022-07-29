import {Dimensions, Image, StyleSheet, View} from "react-native";
import MainLayout from "layouts/MainLayout";
import {BorderButton, PrimaryButton} from "components/button/button";
import {getValueOfPercentFromValue} from "utils/main-helpers";

const HomeScreen = ({navigation}) => {

    const dimension = Dimensions.get("screen")

    const goToSignIn = () => (
        navigation.navigate('signIn')
    )

    const goToSignUp = () => (
        navigation.navigate('signUp')
    )

    return (
        <MainLayout>
            <View style={styles.container}>
                <Image source={{uri: "https://media.graphassets.com/Wt0h3SzJRNHACD8eMXRg"}}
                       style={StyleSheet.flatten([{width: getValueOfPercentFromValue(dimension.width, 100)}, styles.imageLogo])}/>
            </View>
            <View style={[styles.container, styles.containerButtons]}>
                <PrimaryButton onPress={goToSignIn}>Entrar</PrimaryButton>
                <BorderButton onPress={goToSignUp}>Cadastrar</BorderButton>
            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    containerButtons: {
        flex: 1,
    },
    imageLogo: {
        height: '100%',
        resizeMode: "contain",
    },
    button: {
        padding: 16,
        width: "100%",
        marginVertical: 4,
    },
    btRed: {
        backgroundColor: "#000000"
    },
    btBlue: {
        backgroundColor: "#000000"
    },
    btText: {
        fontWeight: "bold",
        color: '#FFFFFF',
        textAlign: "center"
    }
})

export default HomeScreen
