import { AxiosResponse } from "axios"
import { getUsersList } from "../../services/users.api"
import { IUserData } from "../../types"
import { GET_USERS_LIST, GET_USERS_LIST_LOADING } from "../../utils/constants"

export const fetchUserList = () => {
    return async (dispatch: (arg0: { type: string; payload?: IUserData[] }) => void) => {
        dispatch({ type: GET_USERS_LIST_LOADING })

        try {
            const response = await getUsersList()
            const { data } = response
            dispatch({ type: GET_USERS_LIST, payload: data })

        } catch (error) {
            console.log(error)
        } finally {
            dispatch({ type: GET_USERS_LIST_LOADING })
        }
    }
}