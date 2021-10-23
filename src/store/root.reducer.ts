import { combineReducers } from "redux";
import tasks from "./reducers/tasks.reducer"
import users from "./reducers/users.reducer"

const rootReducer = combineReducers({
    tasks,
    users
})

export default rootReducer