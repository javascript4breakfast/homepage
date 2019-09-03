import React, {Fragment} from 'react';
import ContactModal from '../ContactModal';
import {Button, Card, Divider, Header, Icon} from 'semantic-ui-react';

const items = [
  {
    header: '🌮 Techqueria',
    description:
      'a nonprofit that serves the largest community of Latinx in Tech.',
    meta: 'Member/Mentor',
  },
  {
    header: '📚 Adobe Digital Academy',
    description:
      'A pioneer in education and career transformation offering members technology training.',
    meta: 'Alumni/Mentor',
  },
  {
    header: '💻 General Assembly',
    description:
      'Helping members master new skills in design, marketing, technology, and data.',
    meta: 'Career Coach/Alumni/Mentor',
  },
];

const BioComponent = () => {
    return (
        <Fragment>
            <section className='bio-wrapper'>
                <div className='bio-header-wrapper'>
                    <Header as='h1'>
                        Jonthan Ortiz
                        <Header.Subheader>
                            Front End Software Engineer
                        </Header.Subheader>
                        <Divider/>
                        <Header.Subheader>
                            San Francisco, California
                        </Header.Subheader>
                    </Header>
                    <div className='bio-links-wrapper'>
                        <div>
                            <a href='https://www.linkedin.com/in/jonathanortiz31' target='_blank'>
                                <Icon size='big' name='linkedin'/>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.github.com/javascript4breakfast' target='_blank'>
                                <Icon size='big' name='github'/>
                            </a>
                        </div>
                    </div>
                </div>

                <article className='bio-article-wrapper'>
                    <div>
                        <div className='about-head-wrapper'>
                            <div>
                                <Icon name='id badge outline' size='big' />
                            </div>
                            <div>
                                <Header as='h2'>About</Header>
                            </div>
                        </div>
                        <div style={{marginTop: '0.8rem'}}>
                            <div style={{fontSize: '1.333rem'}}>
                                A Javascript Engineer with more than four years of professional experience designing high level software applications for various business and consumer needs. Detail oriented team player who stays abreast of front end technology trends specifically in E-Commerce. Skilled at efficiently resolving project issues and meeting deadlines.<br />
                            <div style={{fontWeight: 'bold', paddingTop:'1.333rem'}}>A special knack for React, React Native, Voice AI, Node.js, distributed systems and Mobile Technology.</div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <div style={{padding: '0.5rem 0 2rem 0'}}>
                <Divider />
            </div>
            <section className='bio-aff-wrapper'>
                <div>
                    <Icon size='big' name='plug'/>
                </div>
                <div>
                    <Header as='h2'>Affiliations</Header>
                </div>
            </section>
            <section className='aff-section-card-wrapper'>
                <div className='card-section-content'>
                    <Card.Group className='card-group-wrapper' items={items} />
                </div>
            </section>
            <div className='contact-button-wrapper'>
                <ContactModal />
            </div>
        </Fragment>
    )
}

export default BioComponent;
