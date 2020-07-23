import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Switch } from 'antd';
import { MailOutlined, HomeOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';
import { AppContext } from '../../context';
import useApp from '../../core/useApp';

const { SubMenu } = Menu;

const Swapper = ({ theme }) => {
  const {toggleDarkMode, toggleLightMode} = useApp();
  const [_theme] = theme.split('-');
  const toggleTheme = currentTheme => {
    return currentTheme === 'light' ? toggleDarkMode() : toggleLightMode()
  };
  return (
    <Switch
      defaultChecked={_theme === 'dark'}
      checkedChildren={<p>dark</p>}
      unCheckedChildren={<p>light</p>}
      onChange={() => toggleTheme(_theme)}
    />
  );
};

const ThemeSwitcher = () => {
  const [state] = React.useContext(AppContext);
  return <Swapper theme={state.theme} />
};

export default function Nav() {
  const [state] = React.useContext(AppContext);
  const [pathState, setPathState] = React.useState('');
  const dark = 'rgb(44,44,44)';
  const bgColor = state.theme === 'dark-mode' ? dark : 'inherit';
  const styles = {
    navWrapper : {
      backgroundColor : bgColor,
      display : 'flex',
      placeContent : 'center'
    }
  };

  return (
    <div>
      <Menu
        style={styles.navWrapper}
        theme={state.theme === 'dark-mode' ? 'dark' : 'light'}
        mode="horizontal"
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to='/'>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<UserOutlined />}>
          <Link to='/about'>
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to='/dashboard'>
            Dash
          </Link>
        </Menu.Item>
        <Menu.Item key="switcher" disabled style={{ cursor : 'pointer' }}>
          <ThemeSwitcher />
        </Menu.Item>
      </Menu>
    </div>
  )
};
