import { ITasksState } from "./tasks"
import { IUserState } from "./users"

interface IAppStore {
    tasks: ITasksState
    users: IUserState
}

export type { IAppStore }