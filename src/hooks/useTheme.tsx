import React, { FC, createContext, useState, useContext } from "react";
import { ThemeColors, LightTheme, DarkTheme } from "../constants";

class ThemeToggle {
  toggle: () => void;
  toggleState: boolean;

  constructor(toggle: () => void, toggleState: boolean) {
    this.toggle = toggle;
    this.toggleState = toggleState;
  }
}

const ThemeContext = createContext<ThemeColors>(LightTheme);

const ThemeToggleContext = createContext<ThemeToggle>({
  toggle: () => {},
  toggleState: false,
});

export const useThemeColors = () => useContext(ThemeContext);
export const useThemeToggle = () => useContext(ThemeToggleContext);

export const ThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useState<ThemeColors>(LightTheme);
  const [toggleState, setToggleState] = useState<boolean>(false);

  const toggleTheme = () => {
    setToggleState(!toggleState);
    setThemeState(toggleState ? LightTheme : DarkTheme);
  };

  return (
    <ThemeContext.Provider value={themeState}>
      <ThemeToggleContext.Provider
        value={{ toggle: toggleTheme, toggleState: toggleState }}
      >
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};
