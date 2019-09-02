import React from 'react';
import {Card, Icon} from 'semantic-ui-react';

const CardComponent = ({skill}) => {
    const {name, level, type} = skill;
    return (
        <div className='card-item'>
            <Card>
                <Card.Content>
                    <Card.Header>
                        {name}
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='chart bar outline' />
                    Comfort level: {level}

                </Card.Content>
            </Card>
        </div>
    )
}

export default CardComponent;
