//preLoaderContext.js
import { createContext, useContext, useState } from "react";

const PreLoaderContext = createContext();

export const usePreLoader = () => {
  return useContext(PreLoaderContext);
};

export const PreLoaderProvider = ({ children }) => {
  const [preLoaderData, setPreLoaderData] = useState(false);

  const updatePreLoaderData = (newData) => {
    setPreLoaderData(newData);
  };

  return (
    <PreLoaderContext.Provider value={{ preLoaderData, updatePreLoaderData }}>
      {children}
    </PreLoaderContext.Provider>
  );
};
