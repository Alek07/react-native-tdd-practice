import React from 'react'
import { StyleSheet, View } from 'react-native';

export default function MainLayout({ children }: any) {
    return (
        <View style={styles.root}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
