import React from "react";

export const UserContext = React.createContext("foydalanuvchi");
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
