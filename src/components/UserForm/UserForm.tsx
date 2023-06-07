import React, {useState} from 'react';

interface IUser {
    name: string,
    email: string,
    isActive: boolean,
    type: string
}

const UserForm = () => {
    const [user, setUser] = useState<IUser>({
        name: '',
        email: '',
        isActive: false,
        type: ''
    });
    return (
        <form>
         <h4>Add user</h4>

            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" className="form-control" />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" className="form-control" />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="isActive" className="pe-2">Active</label>
                <input id="isActive" type="checkbox" name="isActive" />
            </div>

            <div className="form-group mb-3">
                <select name="type" id="type" className="form-control">
                    <option value="user">user</option>
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                </select>
            </div>

            <div className="dorm-group">
                <button type="submit" className="btn btn-primary">Add user</button>
            </div>
        </form>
    );
};

export default UserForm;