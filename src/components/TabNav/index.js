import React from 'react';
import {Menu} from 'semantic-ui-react';

const TabNav = ({activeTab, handleItemClick}) => {
    return (
        <div className='tab-menu-wrapper'>
            <Menu tabular className='tab-menu'>
               <Menu.Item
                   name='bio'
                   active={activeTab === 'bio'}
                   onClick={handleItemClick}/>
               <Menu.Item
                   name='skills'
                   active={activeTab === 'skills'}
                   onClick={handleItemClick}/>
               <Menu.Item
                   name='interest'
                   active={activeTab === 'interest'}
                   onClick={handleItemClick}/>
             </Menu>
        </div>
    )
}

export default TabNav;
