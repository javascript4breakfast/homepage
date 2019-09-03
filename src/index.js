import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import DrawerMenu from './components/DrawerMenu';
import Marquee from './components/Marquee';
import TabNav from './components/TabNav';
import InterestsComponent from './components/InterestsComponent';
import BioComponent from './components/BioComponent';
import SkillsComponent from './components/SkillsComponent';

import 'semantic-ui-css/semantic.min.css'
import './assets/css/hamburgers.css';
import './assets/css/app.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
            activeTabItem: 'bio',
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeTabItem: name });

    toggleBurger = () => {
        const hamburger = document.querySelector('.hamburger');
        this.setState(prevState => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }));
        hamburger.classList.toggle('is-active');
    }

    render() {
        const { isDrawerOpen, activeTabItem } = this.state;
        return (
            <div>
                <NavBar onBurgerToggle={this.toggleBurger.bind(this)} />
                { isDrawerOpen ? <DrawerMenu /> : null }
                <Marquee />
                <TabNav handleItemClick={this.handleItemClick.bind(this)} activeTab={activeTabItem} />
                { activeTabItem === 'bio' ? <BioComponent /> : null }
                { activeTabItem === 'skills' ? <SkillsComponent /> : null }
                { activeTabItem === 'interests' ? <InterestsComponent /> : null }
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));
