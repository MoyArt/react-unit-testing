import { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email
    }
    onUserAdd(newUser)
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Name</label>
        <input value={name} onChange={nameOnChangeHandler} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={emailOnChangeHandler} />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
