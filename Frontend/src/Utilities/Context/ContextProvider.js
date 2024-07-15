import React, { createContext, useState } from 'react';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const [outfit, setOutfit] = useState([]);

    return (
        <MyContext.Provider value={{ outfit, setOutfit }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, ContextProvider };
