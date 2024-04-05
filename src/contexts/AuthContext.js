import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [page, setPage] = useState("home");

  return (
    <AuthContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
