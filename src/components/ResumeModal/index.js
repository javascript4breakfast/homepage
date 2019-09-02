import React from 'react';
import {Button, Divider, Header, Icon, Modal} from 'semantic-ui-react';

const downloadHref = 'https://github.com/javascript4breakfast/homepage/raw/master/jonathanOrtiz_resume.pdf';

let btn = <Button
                fluid
                circular
                size='huge'>
                <Icon name='file code outline'/>
                    Resume
            </Button>;

const ResumeModal = () => (
  <Modal trigger={btn} closeIcon>
    <Modal.Header>JONATHAN ORTIZ - Front End Engineer</Modal.Header>
    <Modal.Content scrolling>
      <Modal.Description>
        <Header>Professional Journey</Header>
        <Divider />
        <div>
            <h4>Adobe Inc -- San Francisco, CA  --  August 2018 - Present <br />
                <span style={{fontStyle: 'italic'}}>
                    Front End Software Engineer - Marketing & Web Platform (Plans/Merchandising)
                </span>
            </h4>
            <ul>
                <li>
                    Wrote multiple front end AEM components that are currently being consumed across multiple product platforms (Document, Creative and Marketing Cloud) using React.js, Webpack, AEM, Apache Sling, OSGi and other Apache related technologies.
                </li>
                <li>
                    Worked with the business and analytics teams to determine their needs and developed application features to meet their design standards using Adobe XD and various enterprise collaboration tools.
                </li>
                <li>
                    Worked on design and launch of the Buy Now button for Next Generation Licensing. Set to traffic over $3B in revenue for 2020, using related aforementioned technologies.
                </li>
                <li>
                    Contributed to "Dexter" -- a unifying AEM implementation platform for all of Adobe Web Properties hosted on AEM to Scale the Business and Unify Customer Experience, implementation involved the aforementioned technology stack.
                </li>
                <li>
                    Communications lead for the Diversity & Inclusion employee resource group - HOLA (Hispanic or Latinos at Adobe)
                </li>
            </ul>
            <h4>Adobe Inc -- San Jose, CA  --  January 2017 - October 2018 <br />
                <span style={{fontStyle: 'italic'}}>
                    Quality Software Engineer (Automation) - Marketing & Web Platform
                </span>
            </h4>
            <ul>
                <li>
                    Developed enterprise facing application to compare visual anomalies across multiple development and production systems using Ruby, Java, Selenium WebDriver and React.js.
                </li>
                <li>
                    Wrote multiple automated test suites to cover multiple domains for both internal and external domains: www.helpx.adobe.com/www.adobe.com/insights. Implemented technologies such ass CSS/Less, jQuery and AEM.
                </li>
            </ul>
            <h4>Adobe Inc -- San Jose, CA  --  August 2016 - December 2016 <br />
                <span style={{fontStyle: 'italic'}}>
                    Front End Software Engineer (Intern) - Marketing & Web Platform
                </span>
            </h4>
            <ul>
                <li>
                    Contributed features to multiple components across the framework built on top of AEM (Adobe Experience Manager) for the helpx.adobe.com domain building on top of AEM, using jQuery, Maven, Java and Apache Sling.
                </li>
                <li>
                    Supported design and implementation for an internal search tool for our internal customer zero application framework (AEM).
                </li>
            </ul>

            <h4>TuneIn -- San Francisco, CA  --  September 2015 - August 2016 <br />
                <span style={{fontStyle: 'italic'}}>
                    Systems & Front End Engineer - Development Operations
                </span>
            </h4>
            <ul>
                <li>
                    Worked with various technologies that monitored distributed systems across a vast enterprise network.
                </li>
                <li>
                    Wrote Front end internal facing applications to render system uptime data using Sumo Logic, DataDog, VMWare and Angular JS.
                </li>
            </ul>
        </div>
        <Divider />
        <Header>Relevant Education</Header>
        <ul>
            <li>
                General Assembly, San Francisco  --  August 2015 - May 2016
            </li>
            <li>
                WDI & FEWD Graduate - Full Stack & Front End Web Development Immersive.
            </li>
        </ul>
        <Divider />
        <Header>Skills/Technical Tool-belt</Header>
        <ul className='skills-list-wrapper'>
            <li style={{margin: '1rem'}}>
                JavaScript
            </li>
            <li style={{margin: '1rem'}}>
                Node.js
            </li>
            <li style={{margin: '1rem'}}>
                Web Analytics
            </li>
            <li style={{margin: '1rem'}}>
                React.js
            </li>
            <li style={{margin: '1rem'}}>
                React Native
            </li>
            <li style={{margin: '1rem'}}>
                Voice AI
            </li>
            <li style={{margin: '1rem'}}>
                Webpack
            </li>
            <li style={{margin: '1rem'}}>
                GraphQL
            </li>
            <li style={{margin: '1rem'}}>
                Apollo
            </li>
            <li style={{margin: '1rem'}}>
                Java
            </li>
            <li style={{margin: '1rem'}}>
                Adobe Experience Manager (AEM)
            </li>
            <li style={{margin: '1rem'}}>
                Ruby
            </li>
            <li style={{margin: '1rem'}}>
                Python
            </li>
        </ul>
        <Divider />
        <div className='link-wrapper'>
            <a href={downloadHref}>
                <Button circular size='massive' color='red'>
                    <Icon name='file pdf outline'/>
                    Download as PDF
                </Button>
            </a>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ResumeModal;
