import { createContext, useContext, useState } from "react";

const ListItemDataContext = createContext();

export const useListItemData = () => {
  return useContext(ListItemDataContext);
};

export const ListItemDataProvider = ({ children }) => {
  const [listItemData, setListItemData] = useState([]);

  const updateListItemData = (lineNumber, newData) => {
    setListItemData((prevData) => {
      const updatedData = [...prevData];
      updatedData[lineNumber - 1] = newData;
      return updatedData;
    });
  };

  return (
    <ListItemDataContext.Provider value={{ listItemData, updateListItemData }}>
      {children}
    </ListItemDataContext.Provider>
  );
};
