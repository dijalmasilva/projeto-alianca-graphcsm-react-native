import {Image, StyleSheet, View} from "react-native";
import {useState} from "react";
import {PrimaryButton} from "../button/button";
import {useTheme} from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

const AvatarInput = () => {
    const theme = useTheme();
    const [imgUri, setImage] = useState('')

    const getPickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    const combineStyleImageContainer = StyleSheet.flatten([
        {backgroundColor: theme.colors.card},
        styles.imageContainer,
    ])

    return (
        <View style={styles.container}>
            <View style={combineStyleImageContainer}>
                { imgUri ? <Image source={{uri: imgUri}} style={styles.image}/> : null}
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={getPickImage}>
                    Escolher imagem
                </PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },
    image: {
        resizeMode: "cover",
        borderRadius: 50,
        width: "100%",
        height: "100%"
    },
    buttonContainer: {
        marginTop: 8,
        marginBottom: 16,
    }
})

export default AvatarInput
