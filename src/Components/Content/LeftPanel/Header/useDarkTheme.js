import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { theme } from './../../../../Redux/Actions/theme.js';
import { lightTheme, darkTheme } from './../../../../theme.js';

export const useDarkTheme = () => {
  const dispatch = useDispatch();
  const [colorTheme, setColorTheme] = useState(false);

  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode, colorMode) => {
    window.localStorage.setItem('theme', mode)
    dispatch(theme(colorMode))
    setColorTheme(!colorTheme)
  }

  const toggleTheme = (togleState) => {
    if (togleState) {
      setMode('dark', darkTheme)
    } else {
      setMode('light', lightTheme)
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
      setMode('dark', darkTheme)
    } else if (localTheme) {
      setColorTheme(localTheme === 'light' ? false : true);
    } else {
      setMode('light', lightTheme)
    }
    setComponentMounted(true);
  }, [])

  return [colorTheme, toggleTheme, componentMounted]
}
