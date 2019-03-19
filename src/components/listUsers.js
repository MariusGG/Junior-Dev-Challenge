import React from "react";

export default const Menu = props => {
  return (
    <ul>
      {props.usersInfo &&
        props.usersInfo.map(user => (
          <li onClick={() => props.setUser(user)} key={user.id}>
            {user.name}
          </li>
        ))}
    </ul>
  );
};
