import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
import ContentLayout from '../../layout/ContentLayout';
import { fetchUserList } from '../../store/actions/users.actions';
import { IAppStore, IUserData } from '../../types';

export default function UsersListScreen() {
    const { users, isLoading } = useSelector((state: IAppStore) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserList())
    }, [])

    const renderItem = ({ item }: { item: IUserData }) => (
        <UserCard user={item} />
    );

    return (
        <ContentLayout>
            {isLoading ?
                <ActivityIndicator size="large" />
                :
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            }
        </ContentLayout>
    );
}
