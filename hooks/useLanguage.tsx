import React, { Dispatch, useState, useContext } from "react";

interface LanguageContextType {
    language: string,
    setLanguage:React.Dispatch<React.SetStateAction<string>>|null
}

const LanguageContext = React.createContext<LanguageContextType>({
  language: "en",
  setLanguage: null,
}

);


export const LanguageProvider = ({ children }:{children:React.ReactNode}) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};



export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
