import React, {useState} from 'react'
import {ThemeContext, themes} from './context'
import {ThemedButton} from './ThemedButtom'
export function App() {
    const [background, changeBackground] = useState(themes.dark)
    const handleClick = () => {
        if (background !== themes.dark) {
            changeBackground(themes.dark)
        } else {
            changeBackground(themes.light)
        }
    }
    return (
      <ThemeContext.Provider value={background}>
        <Toolbar />
        <button  onClick={handleClick}> change </button>
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }