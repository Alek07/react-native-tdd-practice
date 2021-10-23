import axios from "axios"
import { IUserData } from "../types"
import { USERS_URL } from "../utils/constants"

export const getUsersList = () => {
    return axios.get<IUserData[]>(USERS_URL)
}