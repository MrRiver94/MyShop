import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const storeUser = localStorage.getItem("userData");
        if (storeUser) {
            setUserData(JSON.parse(storeUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = ({ name, email }) => {
        setIsLoggedIn(true);
        const userDataObj = { name, email };
        setUserData(userDataObj);
        localStorage.setItem("userData", JSON.stringify(userDataObj));
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData({});
        localStorage.removeItem("userData");
    };

    const authContextValue = {
        isLoggedIn,
        userData,
        handleLogin,
        handleLogout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};