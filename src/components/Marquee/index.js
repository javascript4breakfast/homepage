import React from 'react';

import {Header, Icon} from 'semantic-ui-react';

const Marquee = () => {
    return (
        <div className='marquee-wrapper'>
            <div className='marquee-item'>
                <Icon circular color='grey' name='rocket' size='big' />
            </div>
            <div className='marquee-item'>
                <Header as='h1'>
                    Jonathan Ortiz
                </Header>
            </div>
        </div>
    )
}

export default Marquee;
