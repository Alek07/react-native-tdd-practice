import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import Button from '../components/Button';

describe('Button', () => {
    describe('render and trigger action correctly', () => {
        const mockTitle = "some title"
        const mockFN = jest.fn();

        let getByTestId: any
        let getByText: any

        beforeEach(() => {
            ({ getByTestId, getByText } = render(
                <Button
                    onPress={mockFN}
                    title={mockTitle}
                    testID="mockBtn"
                />
            ))
        })

        it('should render a text element', () => {
            expect(getByTestId('btnTitle'))
        });

        it('should render a title prop', () => {
            expect(getByText('some title'))
        });

        it('should call function', () => {
            fireEvent.press(getByTestId("mockBtn"))
            expect(mockFN).toBeCalledTimes(1)
        });

    });
});