import React, { createContext, useState } from "react";

export interface IAuthProviderValues {
  count: number;
  setCount: (number: number) => void;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthProviderValues | null>(null);

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const providerValue: IAuthProviderValues = { count, setCount };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
