import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthentificator = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuthentificator