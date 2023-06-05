import React, { createContext, useContext } from "react";
import { useCookies } from "react-cookie";

const UserContext = createContext(null);

const decodeBase64Utf8 = (base64) => {
  try {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const decoder = new TextDecoder("utf-8");
    return decoder.decode(bytes);
  } catch (error) {
    // console.error("Error decoding base64 string", error);
    return base64; // or return some default/fallback value
  }
};

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
        uuid: decodeBase64Utf8(cookies.uuid) || "",
        firstName: decodeBase64Utf8(cookies.first_name) || "",
        lastName: decodeBase64Utf8(cookies.last_name) || "",
        email: decodeBase64Utf8(cookies.email) || "",
        phoneNumber: decodeBase64Utf8(cookies.phone_number) || "",
        deliveryAddress: decodeBase64Utf8(cookies.delivery_address) || "",
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
