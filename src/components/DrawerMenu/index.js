import React from 'react';
import ChatModal from '../ChatModal';
import ResumeModal from '../ResumeModal';
import {Button, Icon} from 'semantic-ui-react';

const DrawerMenu = () => {
    return (
        <div className='drawer-wrapper'>
            <div className='drawer-item'>
                <ChatModal />
            </div>
            <div className='drawer-item'>
                <ResumeModal />
            </div>
        </div>
    )
}

export default DrawerMenu;
