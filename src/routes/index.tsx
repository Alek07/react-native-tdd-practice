import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/Home';
import TasksScreen from '../screens/Tasks';
import UsersListScreen from '../screens/UsersLists';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Tasks" component={TasksScreen} />
                <Stack.Screen name="UsersList" component={UsersListScreen} options={{ title: 'Users List' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}