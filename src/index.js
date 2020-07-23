import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import MainProvider, { AppContext } from './context';
import useApp from './core/useApp';
import Pages from './Pages';
import Nav from './components/Nav';

import 'antd/dist/antd.css';
import './clientlibs/css/App.css';

function App() {
  const [state] = React.useContext(AppContext);
  return (
    <Router>
      <div>
        <Nav theme={state.theme} />
        <div className={state.theme}>
          <section className="container">
            <Pages />
          </section>
        </div>
      </div>
    </Router>
  );
};

let app = (
  <MainProvider>
    <App />
  </MainProvider>
);

ReactDOM.render(app, document.querySelector('#root'));
