import React from 'react'

export const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ff0000",
      background: "#00ff00"
    },
  };
  
export const ThemeContext = React.createContext(themes.light);


