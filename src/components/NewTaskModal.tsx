import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../store/actions/tasks.actions';
import Button from './Button';

export default function NewTaskModal({ modalVisible, setModalVisible }: any) {
    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const addTasks = () => {
        if (input != "") {
            dispatch(addNewTask(input))
            setInput("")
            setModalVisible(!modalVisible)
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        value={input}
                        onChangeText={setInput}
                        testID="taskInput"
                    />
                    <Button
                        title="Add Task"
                        onPress={addTasks}
                        testID="addTask"
                    />
                    <Button
                        title="Cancel"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.33)",
    },
    modalView: {
        width: "80%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#00000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        width: "100%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#949494",
        borderRadius: 10,
        padding: 10,
        fontSize: 18
    },
});
