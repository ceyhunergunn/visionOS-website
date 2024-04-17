import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [page, setPage] = useState("home");
  const [blur, setBlur] = useState(10);

  return (
    <AuthContext.Provider
      value={{
        page,
        setPage,
        blur,
        setBlur,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
