import produce from "immer";
import { ITasksState } from "../../types";
import { ADD_TASK } from "../../utils/constants";

const initState: ITasksState = {
    tasks: null,
}

const tasks = (state = initState, action: any) => produce(state, draft => {
    switch (action.type) {
        case ADD_TASK:
            const updateTask: string[] = draft.tasks ? [action.payload, ...draft.tasks] : [action.payload]
            draft.tasks = updateTask
            break
        default:
            return state
    }
})

export default tasks