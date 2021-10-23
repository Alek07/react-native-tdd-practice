import configureStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk';
import promise from 'redux-promise';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchUserList } from '../store/actions/users.actions';
import { GET_USERS_LIST, GET_USERS_LIST_LOADING, USERS_URL } from '../utils/constants';

/* mock redux store */
let middlewares = [thunk, promise];
const mockStore = configureStore(middlewares)
const initialState = { users: { users: null, isLoading: false } }
let store = mockStore(initialState)

/* mock axios call */
const mock = new MockAdapter(axios);

const mockData = {
    createdAt: "2021-10-22T12:13:22.338Z",
    name: "Pauline Blanda",
    avatar: "https://cdn.fakercloud.com/avatars/mkginfo_128.jpg",
    id: "1"
}

describe('Get Users List Action', () => {
    describe('fetch user data from server', () => {
        beforeEach(() => {
            store.clearActions();
        });

        it('should dispatch GET_USERS_LIST after a successfull API requets', async () => {
            mock.onGet(USERS_URL).reply(200, [mockData])
            await store.dispatch<any>(fetchUserList())

            const expectedActions = [
                { type: GET_USERS_LIST_LOADING },
                {
                    type: GET_USERS_LIST,
                    payload: [mockData]
                },
                { type: GET_USERS_LIST_LOADING }
            ]

            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});