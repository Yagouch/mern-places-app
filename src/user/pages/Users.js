import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Yago Carballo",
      image: "https://yagocarballo.com/foto_perfil.webp",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
