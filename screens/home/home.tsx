import {Image, Pressable, StyleSheet, Text, View} from "react-native";

const HomeScreen = ({ navigation }) => {

    const goToSignIn = () => (
        navigation.navigate('signIn')
    )

    const goToSignUp = () => (
        navigation.navigate('signUp')
    )

    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={{ flex: 20, alignItems: "center" }}>
                    <Image source={{uri: "https://media.graphassets.com/Wt0h3SzJRNHACD8eMXRg"}}
                           style={styles.image}/>
                </View>
                <View style={styles.actions}>
                    <Pressable style={[styles.button, styles.btRed]} onPress={goToSignIn}>
                        <Text style={styles.btText}>Entrar</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.btBlue]} onPress={goToSignUp}>
                        <Text style={styles.btText}>Cadastrar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16
    },
    mainView: {
        flex: 24,
    },
    image: {
        flex: 1,
        resizeMode: "center",
        aspectRatio: 1
    },
    actions: {
        flex: 4,
        alignItems: "center"
    },
    button: {
        width: 300,
        alignItems: "center",
        padding: 16,
        marginVertical: 4,
        borderRadius: 8
    },
    btRed: {
        backgroundColor: "#762222"
    },
    btBlue: {
        backgroundColor: "#24428d"
    },
    btText: {
        color: "#FFFFFF"
    }
})

export default HomeScreen
