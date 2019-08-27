import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Menu, Button} from 'semantic-ui-react';
import {themeDark, themeLight} from './configs/themeConfigs';
import 'semantic-ui-css/semantic.min.css'
import './assets/css/app.less';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkTheme: false,
        }
    }

    toggleTheme() {
        this.setState(prevState => ({
            darkTheme: !prevState.darkTheme
        }));
    }

    render() {
        const isDark = this.state.darkTheme;
        return (
            <div>
                <h3>Temporarily Under Construction</h3>
                <blockquote>Next Deployment: Tuesday August 27th 8AM PST</blockquote>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));
