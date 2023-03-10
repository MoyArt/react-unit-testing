const UserList = ({ users }) => {
  const renderedUsers = users.map((user, index) => {
    return (
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{renderedUsers}</tbody>
      </table>
    </div>
  );
};

export default UserList;
