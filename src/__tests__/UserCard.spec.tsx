import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserCard from '../components/UserCard';

const mockData = {
    createdAt: "2021-10-22T12:13:22.338Z",
    name: "Pauline Blanda",
    avatar: "https://cdn.fakercloud.com/avatars/mkginfo_128.jpg",
    id: "1"
}

describe('Task', () => {
    describe('component renders correctly', () => {
        let getByTestId: any
        let getByText: any

        beforeEach(() => {
            ({ getByTestId, getByText } = render(
                <UserCard
                    user={mockData}
                />
            ))
        })

        it('should render a image element', () => {
            expect(getByTestId('userImg'))
        });

        it('should render a text element', () => {
            expect(getByTestId('userName'))
        });

        it('should render a username prop', () => {
            expect(getByText("Pauline Blanda"))
        });

    });
});