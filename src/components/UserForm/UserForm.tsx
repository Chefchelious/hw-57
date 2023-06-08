import React, {useState} from 'react';
import {nanoid} from "nanoid";
import {IUser, IUserMutation} from "../../types";

interface IProps {
    onSubmit: (newUser: IUser) => void;

}


const UserForm: React.FC<IProps> = ({onSubmit}) => {
    const [user, setUser] = useState<IUserMutation>({
        name: '',
        email: '',
        isActive: false,
        type: ''
    });

    const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (user.type !== 'user' && user.type !== 'editor' && user.type !== 'admin') {
            alert('Invalid user type!');
            setUser({
                name: '',
                email: '',
                isActive: false,
                type: ''
            });
            return;
        }
        onSubmit({
            id: nanoid(),
            ...user,
        });

        setUser({
            name: '',
            email: '',
            isActive: false,
            type: ''
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
         <h4>Add user</h4>

            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    value={user.name}
                    onChange={onTextFieldChange}
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    value={user.email}
                    onChange={onTextFieldChange}
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="isActive" className="pe-2">Active</label>
                <input
                    id="isActive"
                    type="checkbox"
                    name="isActive"
                    checked={user.isActive}
                    onChange={(e) => setUser(prevState => ({...prevState, isActive: e.target.checked}))}
                />
            </div>

            <div className="form-group mb-3">
                <select
                    name="type"
                    id="type"
                    className="form-control"
                    value={user.type}
                    onChange={onTextFieldChange}
                    required
                >
                    <option value="" disabled defaultValue="">Select a type...</option>
                    <option value="user">user</option>
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                    <option value="sadad">sadad</option>
                </select>
            </div>

            <div className="dorm-group">
                <button type="submit" className="btn btn-primary">Add user</button>
            </div>
        </form>
    );
};

export default UserForm;