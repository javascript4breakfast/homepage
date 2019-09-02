import React from 'react';
import {Header, Icon} from 'semantic-ui-react';
import CardComponent from '../CardComponent';
import skills from '../../configs/skills';

const SkillsComponent = () => {
    return (
        <div>
            <div className='skills-header'>
                <Header as='h2'>
                    Technical Skill Set
                </Header>
            </div>
            <div className='card-skill-wrapper'>
                {skills.map((item, index) => <CardComponent key={index} skill={item} />)}
            </div>
        </div>
    )
}

export default SkillsComponent
