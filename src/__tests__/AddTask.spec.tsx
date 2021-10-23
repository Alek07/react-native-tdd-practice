import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TasksScreen from '../screens/Tasks';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';

/* mock redux store */
let middlewares = [thunk, promise];
const mockStore = configureStore(middlewares)
const initialState = { tasks: { tasks: null } }
let store = mockStore(initialState)

describe('TaskScreen', () => {
  describe('adding new task', () => {
    let getByTestId: any
    let queryByTestId: any

    beforeEach(async () => {
      /* render task screen */
      ({ queryByTestId, getByTestId } = render(<Provider store={store}><TasksScreen /></Provider>))

      const newTask = "I'm a new task";

      /* interact with button component */
      fireEvent.press(getByTestId('newTask'));

      /* interact with input component */
      fireEvent.changeText(getByTestId('taskInput'), newTask);

      /* interact with button component */
      fireEvent.press(getByTestId('addTask'));

    });

    it('should clear input after', () => {
      expect(getByTestId('taskInput').props.value).toEqual('');
    });

    it('should add new task in list', () => {
      expect(queryByTestId('task-0'));
    });
  });
});