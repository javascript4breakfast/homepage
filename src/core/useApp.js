import React from 'react';
import { AppContext } from '../context';

export default function useApp () {
  const [state, setState] = React.useContext(AppContext);

  const storeLocally = _value => {
    return window.localStorage ? localStorage.setItem('supreme-theme', _value) : false;
  };

  const toggleLightMode = () => {
    storeLocally('light-mode');
    setState(prevState => ({...prevState, theme : 'light-mode'}));
  };

  const toggleDarkMode = () => {
    storeLocally('dark-mode');
    setState(prevState => ({...prevState, theme : 'dark-mode'}));
  };

  const toggleHelpModal = () => {
    setState(prevState => ({...prevState, showHelpModal : !state.showHelpModal }));
  };

  return {
    toggleLightMode,
    toggleDarkMode,
    toggleHelpModal
  }
};
