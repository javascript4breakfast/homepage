import React from 'react';

const AppContext = React.createContext([{}, () => {}]);

const initialState = {
  theme         :  window.localStorage.getItem('supreme-theme') || 'light-mode',
  showHelpModal : false
};

export default function MainProvider(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext };
