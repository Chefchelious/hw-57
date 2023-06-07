export interface IUser {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    type: string;
}

export interface IUserMutation {
    name: string;
    email: string;
    isActive: boolean;
    type: string;
}

