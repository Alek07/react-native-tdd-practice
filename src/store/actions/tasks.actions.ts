import { ADD_TASK } from "../../utils/constants"

export const addNewTask = (newTask: any) => {
    return (dispatch: (arg0: { type: string; payload: string }) => void) => {
        dispatch({ type: ADD_TASK, payload: newTask })
    }
}