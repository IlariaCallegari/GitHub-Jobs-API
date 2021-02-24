import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  
  const [isDark, setTheme] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleTheme = () => {
    setTheme(!isDark);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
    toggleTheme();
  };

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme, checked, handleChange }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
