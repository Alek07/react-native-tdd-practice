import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button(props: any) {
    const { onPress, title, ...prop } = props
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.appButtonContainer}
            {...prop}
        >
            <Text testID="btnTitle" style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        width: 200,
        elevation: 8,
        backgroundColor: "#2a51d1",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 10
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
