import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";


const useAuth = () => {
    const authentication = useContext(AuthContext)
    return authentication
};

export default useAuth;