import React from 'react';
import {Button, Divider, Grid, Header, Icon, Modal, Segment} from 'semantic-ui-react';

let btn = <Button
                circular
                positive
                size='massive'>
                <Icon name='mobile alternate'/>
                Contact
            </Button>;

const emailString = 'jonathan@javascript4breakfast.com';

const ContactModal = () => (
  <Modal trigger={btn} closeIcon>
    <Modal.Header>Get In Touch</Modal.Header>
    <Modal.Content>
      <Modal.Description>
          <Segment placeholder>
              <Grid columns={2} stackable textAlign='center'>
                  <Grid.Row verticalAlign='middle'>
                      <Grid.Column>
                          <Header icon>
                              <Icon name='mail outline' />
                              {emailString}
                          </Header>
                          <a href={`mailto:${emailString}?Subject=Great%20Website`} target='_top'>
                              <Button circular size='huge' primary>Email</Button>
                          </a>

                      </Grid.Column>

                      <Grid.Column>
                          <Header icon>
                              <Icon name='mobile alternate' />
                              {`1(408)609-1239`}
                          </Header>
                          <a href="sms:+14086091239">
                              <Button circular size='huge' primary>Text</Button>
                          </a>
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
          </Segment>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ContactModal;
