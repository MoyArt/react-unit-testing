import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
function App() {
  const [users, setUsers] = useState([]);
  const onUserAdd = (user) => {
    console.log(user);
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
