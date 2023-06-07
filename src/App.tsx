import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {IUser} from "./types";
import './App.css';

const App = () => {
    const [users, setUsers] = useState<IUser[]>([
        {id: "213sadasd", name: "LiL Peep", email: "LiLPeepInDaHouse@gmail.com", isActive: false, type: "admin"},
        {id: "qwe123fdg", name: "Noga Erez", email: "IKnowYouBuyViewsHollyWaterIsNoJuice@gmail.com", isActive: true, type: "editor"},
    ]);

    const addUser = (newUser: IUser) => setUsers(prevState => [...prevState, newUser]);

  return (
      <>
      <main className="container-fluid">
          <div className="row mt-5">
              <div className="col-6">
                  <UserForm onSubmit={addUser} />
              </div>

              <div className="col-6">
                  <Users users={users} />
              </div>
          </div>
      </main>
      </>
  );
};

export default App;
