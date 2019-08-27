import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import DrawerMenu from './components/DrawerMenu';
import Marquee from './components/Marquee';

import 'semantic-ui-css/semantic.min.css'
import './assets/css/hamburgers.css';
import './assets/css/app.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
        }
    }

    toggleBurger() {
        const hamburger = document.querySelector('.hamburger');
        this.setState(prevState => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }));
        hamburger.classList.toggle('is-active');
    }

    render() {
        const showDrawer = this.state.isDrawerOpen;
        return (
            <div>
                <NavBar onBurgerToggle={this.toggleBurger.bind(this)} />
                { showDrawer ? <DrawerMenu /> : null }
                <Marquee />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));
