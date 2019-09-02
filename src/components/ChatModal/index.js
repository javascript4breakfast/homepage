import React from 'react';
import {Button, Header, Icon, Modal, Segment} from 'semantic-ui-react';

let btn = <Button
                fluid
                circular
                size='huge'>
                <Icon name='chat'/>
                Chat
            </Button>;

const ChatModal = () => (
  <Modal trigger={btn} closeIcon>
    <Modal.Header>Live Chat</Modal.Header>
    <Modal.Content>
      <Modal.Description>
          <Segment placeholder>
              <Header icon>
                  <Icon name='warning sign' />
                  Under Construction, come back later.
              </Header>
          </Segment>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ChatModal;
