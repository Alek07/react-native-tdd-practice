import produce from "immer";
import { IUserState } from "../../types";
import { GET_USERS_LIST, GET_USERS_LIST_LOADING } from "../../utils/constants";

const initState: IUserState = {
    isLoading: false,
    users: null
}

const users = (state = initState, action: any) => produce(state, draft => {
    switch (action.type) {
        case GET_USERS_LIST_LOADING:
            draft.isLoading = !draft.isLoading
            break
        case GET_USERS_LIST:
            draft.users = action.payload
            break
        default:
            return state
    }
})

export default users