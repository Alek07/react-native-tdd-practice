import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import NewTaskModal from '../../components/NewTaskModal';
import Task from '../../components/Task';
import ContentLayout from '../../layout/ContentLayout';
import { IAppStore } from '../../types';

export default function TasksScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const { tasks } = useSelector((state: IAppStore) => state.tasks)

    const handleModalOpen = () => {
        setModalVisible(!modalVisible)
    }

    const renderItem = ({ item, index }: { item: string, index: number }) => (
        <Task title={item} index={index} />
    );

    return (
        <ContentLayout>
            <Button
                title="New Task"
                onPress={handleModalOpen}
                testID="newTask"
            />

            <NewTaskModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

            <FlatList
                data={tasks}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </ContentLayout>
    );
}
