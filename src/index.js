import React from 'react';
import ReactDOM from 'react-dom';
import './clientlibs/css/App.css';

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { IoMdConstruct } from "react-icons/io";

const AppContext = React.createContext([{}, () => {}]);
const initialState = {
  theme        : 'supreme--dark',
  showThemeBar : false
};
const MainProvider = (props) => {
  const [state, setState] = React.useState(initialState);
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}



const themeMapper = {
  'supreme--dark' : 'supreme--dark',
  'supreme--darkest' : 'supreme--darkest',
  'supreme--light' : 'supreme--light',
  'supreme--lightest' : 'supreme--lightest'
};

function App() {
  const [state, setState] = React.useContext(AppContext);

  const toggleThemeBar = () => {
    setState(prevState => ({ ...prevState, showThemeBar: !state.showThemeBar }));
  };

  const handleThemeChange = value => {
    setState(prevState => ({...prevState, theme: `supreme--${value.toLowerCase()}`}));
    toggleThemeBar();
  };


  const hide = {display:'none'};
  const show = {display:'inherit'};
  return (
    <div className={`${state.theme} container`}>
      <section className={`dropdown-wrapper`}>
        <div style={state.showThemeBar ? hide : show}>
          <button onClick={toggleThemeBar}>
            {!state.showThemeBar && <AiOutlineDoubleRight />}
          </button>
        </div>
        <div style={!state.showThemeBar ? hide : show}>
          <button onClick={e => handleThemeChange(e.target.innerText)}>
            darkest
          </button>
          <button onClick={e => handleThemeChange(e.target.innerText)}>
            dark
          </button>
          <button onClick={e => handleThemeChange(e.target.innerText)}>
            lightest
          </button>
          <button onClick={e => handleThemeChange(e.target.innerText)}>
            light
          </button>
          <button className="spectrum-Button spectrum-Button--overBackground"  onClick={toggleThemeBar}>
            <AiOutlineDoubleLeft />
          </button>
        </div>
      </section>
      <section className={`app-wrapper`}>
        <IoMdConstruct className="huge-icon" />
        <p>This website is under construction, but here's a preview.</p>
      </section>
    </div>
  );
};

let app = (
  <MainProvider>
    <App />
  </MainProvider>
);

ReactDOM.render(app, document.querySelector('#root'));
