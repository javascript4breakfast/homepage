import React from 'react';

import {Header, Icon} from 'semantic-ui-react';

const Marquee = () => {
    return (
        <div className='marquee-wrapper'>
            <div className='marquee-item'>
                <Icon circular color='grey' name='code' size='big' />
            </div>
            <div className='marquee-item'>
                <Header block as='h1'>
                    Jonathan Ortiz
                </Header>
            </div>
            <div className='marquee-item'>
                <Header as='h4' textAlign='center'>
                    Front End Software Engineer - San Francisco, California
                </Header>
            </div>
        </div>
    )
}

export default Marquee;
