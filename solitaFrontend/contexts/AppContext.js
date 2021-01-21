import React, {useState, createContext} from "react";

// Create Context Object
export const AppContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = props => {
  const [solitaPersons, setSolitaPersons] = useState({});

  return (
    <AppContext.Provider value={[count, setCount]}>
      {props.children}
    </AppContext.Provider>
  );
};
