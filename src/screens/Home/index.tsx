import React from 'react'
import Button from '../../components/Button';
import MainLayout from '../../layout/MainLayout';

export default function HomeScreen({ navigation }: any) {

    const handleNavigation = (route: string) => {
        navigation.navigate(route)
    }

    return (
        <MainLayout>
            <Button
                title="Go to Tasks"
                onPress={() => handleNavigation('Tasks')}
            />
            <Button
                title="Go to List"
                onPress={() => handleNavigation('UsersList')}
            />
        </MainLayout>
    );
}
