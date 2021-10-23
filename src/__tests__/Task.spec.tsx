import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Task from '../components/Task';

describe('Task', () => {
    describe('component renders correctly', () => {
        const mockTitle = "task title"

        let getByTestId: any
        let getByText: any

        beforeEach(() => {
            ({ getByTestId, getByText } = render(
                <Task
                    title={mockTitle}
                    index={0}
                />
            ))
        })

        it('should render a text element', () => {
            expect(getByTestId('taskTitle'))
        });

        it('should render a title prop', () => {
            expect(getByText('task title'))
        });

    });
});