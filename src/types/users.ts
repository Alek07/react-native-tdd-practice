
interface IUserData {
    createdAt: string
    name: string
    avatar: string
    id: string
}

interface IUserState {
    isLoading: boolean
    users: IUserData[] | null
}

export type { IUserState, IUserData }