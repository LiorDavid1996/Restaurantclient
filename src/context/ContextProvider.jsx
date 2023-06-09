import React, { createContext, useContext, useState ,useEffect } from 'react';
import summaryServices from '../Services/summary'


const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [data, setData] = useState([]);
  const [days, setDays] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    summaryServices().
    then(res=> {setData(res?.message);
      setDays(res?.message[0].days)
      console.log(res?.message[0].days);
    setIsLoading(true)}
    
    )

  },[] );
 

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings,data, isLoading,days}} >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);