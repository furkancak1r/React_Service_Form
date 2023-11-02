import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useLanguage = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [FormData, setFormData] = useState([]);

  const FormDataFn = (data) => {
    setFormData(data);
  };

  return (
    <FormDataContext.Provider value={{ FormData, FormDataFn }}>
      {children}
    </FormDataContext.Provider>
  );
};
