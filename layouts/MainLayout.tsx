import {StyleSheet, View} from "react-native";

const MainLayout = ({children}) => {
    return (
        <View style={styles.mainLayout}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    mainLayout: {
        paddingHorizontal: 16,
        paddingTop: 8,
        flex: 1,
    }
})

export default MainLayout;
