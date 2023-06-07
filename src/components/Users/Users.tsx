import React from 'react';
import User from "./User";
import {IUser} from "../../types";

interface IProps {
    users: IUser[]
}

const Users: React.FC<IProps> = ({users}) => {
    return (
        <div>
            <h4>Users</h4>
            {users.map(user => (
                <User key={user.id} user={user}/>
            ))}
        </div>
    );
};

export default Users;