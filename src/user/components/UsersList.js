import React from "react";

import UserItem from "./UserItem";
import Card from '../../shared/components/UIEements/Card';
import "./UsersList.css";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <Card >
        <h2>No users found.</h2>
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
        
      ))}
    </ul>
  );
};

export default UsersList;
