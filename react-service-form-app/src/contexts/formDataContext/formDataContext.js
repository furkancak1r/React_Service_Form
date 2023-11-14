import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    outOfWarranty: false,
    withinWarranty: false,
    freeService: false,
    paidService: false,
    contractMaintenance: false,
    withMaterial: false,
    discoveryDetection: false,
  });

  const FormDataFn = (data) => {
    setFormData(data);
  };

  return (
    <FormDataContext.Provider value={{ formData, FormDataFn }}>
      {children}
    </FormDataContext.Provider>
  );
};
