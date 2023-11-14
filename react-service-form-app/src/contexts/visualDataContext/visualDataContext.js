import { createContext, useContext, useState } from "react";

const VisualDataContext = createContext();

export const useVisualData = () => {
  return useContext(VisualDataContext);
};

export const VisualDataProvider = ({ children }) => {
  const [visualData, setVisualData] = useState([]);
  const updateVisualData = (data) => {
    setVisualData(data);
  };

  return (
    <VisualDataContext.Provider value={{ visualData, updateVisualData }}>
      {children}
    </VisualDataContext.Provider>
  );
};
