import React, { createContext, useContext } from "react";
import { useCookies } from "react-cookie";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [cookies] = useCookies([
    "uuid",
    "first_name",
    "last_name",
    "email",
    "phone_number",
    "delivery_address",
  ]); // List all cookie names

  return (
    <UserContext.Provider
      value={{
        uuid: cookies.uuid,
        firstName: cookies.first_name,
        lastName: cookies.last_name,
        email: cookies.email,
        phoneNumber: cookies.phone_number,
        deliveryAddress: cookies.delivery_address,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
