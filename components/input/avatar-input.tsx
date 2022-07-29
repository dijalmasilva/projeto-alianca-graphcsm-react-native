import {Image, StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import {PrimaryButton} from "../button/button";
import {useTheme} from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import ImagePickerType from "models/ImagePickerType";

const ImageOptions = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 1,
}

type Props = {
    onChange: (image: ImagePickerType) => void
}

const AvatarInput = ({onChange}: Props) => {
    const theme = useTheme();
    const [image, setImage] = useState<ImagePickerType | null>(null);

    const getPickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync(ImageOptions)

        if (!result.cancelled) {
            setImage(result as ImagePickerType)
        }
    }

    const combineStyleImageContainer = StyleSheet.flatten([
        {backgroundColor: theme.colors.card},
        styles.imageContainer,
    ])

    useEffect(() => {
        if (image) {
            onChange(image);
        }
    }, [image])

    return (
        <View style={styles.container}>
            <View style={combineStyleImageContainer}>
                {image && image ? <Image source={{uri: image.uri}} style={styles.image}/> : null}
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
