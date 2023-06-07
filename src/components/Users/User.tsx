import React from 'react';
import {IUser} from "../../types";

interface IProps {
    user: IUser;
}

const User: React.FC<IProps> = ({user}) => {
    const isActiveClasses = ['list-group-item ', 'inactiveUser'];

    if(user.isActive) {
        isActiveClasses.push('activeUser');
    }

    return (
        <div className="card mb-3" style={{width: "18rem"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">User Name: {user.name}</li>
                <li className="list-group-item">User Email: {user.email}</li>
                <li className={isActiveClasses.join(' ')} >Active:</li>
                <li className="list-group-item">Role: {user.type}</li>
            </ul>
        </div>
    );
};

export default User;