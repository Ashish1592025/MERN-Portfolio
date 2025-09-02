import { useState, createContext, useContext } from "react";

// custom hook
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // returning provider
  return (
    // context provided
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook
const useTheme = () => useContext(ThemeContext);

export {useTheme, ThemeProvider};