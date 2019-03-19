import React from "react";

const ListUsers = props => {
  return (
    <ul>
      {props.usersInfo &&
        props.usersInfo.map(users => (
          <li onClick={() => props.setUser(users)} key={users.id}>
            {users.name}
          </li>
        ))}
    </ul>
  );
};
export default ListUsers;
