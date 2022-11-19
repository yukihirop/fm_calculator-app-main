import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import React, { createContext, useContext, useState } from "react";
import { themes, theme1 } from "theme";

interface ThemeContextType {
  theme: number;
  setTheme: (val: number) => void;
}

const defaultContext: ThemeContextType = {
  theme: 1,
  setTheme: (val) => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState(1);
  const getTheme = () => themes[`theme${value}`] || theme1;

  return (
    <EmotionThemeProvider theme={getTheme()}>
      <ThemeContext.Provider
        value={{
          theme: value,
          setTheme: setValue,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
