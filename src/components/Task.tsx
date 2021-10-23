import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Task({ title, index }: { title: string, index: number }) {
    return (
        <View style={styles.container} testID={`task-${index}`}>
            <Text style={styles.title} testID="taskTitle">{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: "#00000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    title: {
        fontSize: 25,
        color: "#2b2b2b"
    },
});
