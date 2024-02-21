import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('isDark');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    } else if (prefersDarkMode) {
      localStorage.setItem('isDark', true);
      return true;
    } else {
      localStorage.setItem('isDark', false);
      return false;
    }
  });

  const toggleTheme = () => setIsDark((prev) => {
    const newTheme = !prev;
    localStorage.setItem('isDark', newTheme);
    return newTheme;
  })

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

