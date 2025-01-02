import { useContext } from "react";
import { AuthContext, IAuthProviderValues } from "../providers/AuthProvider";

const UseAuthContext = (): IAuthProviderValues | null => {
  return useContext(AuthContext);
};

export default UseAuthContext;
