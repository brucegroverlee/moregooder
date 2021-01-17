import React from 'react';

export type LanguageState = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export const LanguageContext = React.createContext<LanguageState>(['en', () => ({})]);

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  const [language, setLanguage] = context;
  return { language, setLanguage, };
}

export const LanguageProvider: React.FunctionComponent = (props) => {
  const [language, setLanguage] = React.useState<string>('en');
  const value = React.useMemo(() => [language, setLanguage], [language]) as LanguageState;
  return (<LanguageContext.Provider value={value} {...props} />);
}