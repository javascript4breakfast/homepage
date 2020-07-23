import React from 'react';
import { Button, Modal, Tabs, List } from 'antd';
import { AppContext } from '../../context';
import useApp from '../../core/useApp';
import { GiWaterfall, GiGlowingHands, GiSpaceSuit, GiSurroundedShield, GiJasonMask } from "react-icons/gi";

const { TabPane } = Tabs;

const ModalFooter = props => {
  const { toggleHelpModal } = useApp();
  return (
    <>
      <Button
        type="primary"
        shape="round"
        onClick={toggleHelpModal}
      >
        OK
      </Button>
    </>
  );
};



const WashYourHands = () => {
  const _data = [
    'Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.',
    'AND ESPECIALLY BEFORE:',
    'Before eating or preparing food, Before touching your face, After using the restroom',
    'After leaving a public place, After blowing your nose, coughing, or sneezing, After handling your cloth face covering',
    'After changing a diaper, After caring for someone sick, After caring for someone sick',
    'If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.',
    'Avoid touching your eyes, nose, and mouth with unwashed hands.'
  ]
  const HeaderText = () => <strong style={strongText}>Wash your hands often</strong>;
  const FooterLink = () => <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">CDC Guidelines</a>;
  const strongText = {
    fontSize      : '1em',
    textTransform : 'uppercase'
  };

  return (
    <div className="modal-tab-wrapper">
      <div>
        <GiGlowingHands className="modal-icon" />
      </div>
      <div>
        <List
            header={<HeaderText />}
            footer={<FooterLink />}
            bordered
            dataSource={_data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
      </div>
    </div>
  );
};

const SocialDistance = () => {
  const _data = [
    'Inside your home: Avoid close contact with people who are sick.',
    'If possible, maintain 6 feet between the person who is sick and other household members.',
    'Outside your home: Put 6 feet of distance between yourself and people who don’t live in your household.',
    'Remember that some people without symptoms may be able to spread virus.',
    'Stay at least 6 feet (about 2 arms’ length) from other people.',
    'Keeping distance from others is especially important for people who are at higher risk of getting very sick.'
  ];
  const strongText = {
    fontSize      : '1em',
    textTransform : 'uppercase'
  };

  const HeaderText = () => <strong style={strongText}>Avoid close contact</strong>;
  const FooterLink = () => <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">CDC Guidelines</a>;

  return (
    <div className="modal-tab-wrapper">
      <div>
        <GiSurroundedShield className="modal-icon" />
      </div>
      <div>
        <List
            header={<HeaderText />}
            footer={<FooterLink />}
            bordered
            dataSource={_data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
      </div>
    </div>
  );
};

const WearMask = () => {
  const _data = [
    'You could spread COVID-19 to others even if you do not feel sick.',
    'The cloth face cover is meant to protect other people in case you are infected.',
    'Everyone should wear a cloth face cover in public settings and when around people who don’t live in your household, especially when other social distancing measures are difficult to maintain.',
    'Cloth face coverings should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance.',
    'Do NOT use a facemask meant for a healthcare worker. Currently, surgical masks and N95 respirators are critical supplies that should be reserved for healthcare workers and other first responders.',
    'Continue to keep about 6 feet between yourself and others. The cloth face cover is not a substitute for social distancing.'
  ];

  const strongText = {
    fontSize      : '1em',
    textTransform : 'uppercase'
  };
  const HeaderText = () => <strong style={strongText}>Cover your mouth and nose with a cloth face cover when around others</strong>;
  const FooterLink = () => <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">CDC Guidelines</a>;
  return (
    <>
    <div className="modal-tab-wrapper">
      <div>
          <GiJasonMask className="modal-icon" />
      </div>
      <div>
        <List
            header={<HeaderText />}
            footer={<FooterLink />}
            bordered
            dataSource={_data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
      </div>
    </div>

    </>
  )
}

const StepTabs = props => {
  return (
    <Tabs defaultActiveKey="1" type="card" size="small">
      <TabPane tab="Wash your hands often" key="1">
        <WashYourHands />
      </TabPane>
      <TabPane tab="Avoid close contact" key="2">
        <SocialDistance />
      </TabPane>
      <TabPane tab="Wear A Mask" key="3">
        <WearMask />
      </TabPane>
    </Tabs>
  );
};

export default function HelpModal(props) {
  const [state] = React.useContext(AppContext);
  return (
    <>
    <Modal
      width={520}
      closable={false}
      footer={<ModalFooter />}
      centered
      title="Help Stop The Spread"
      visible={state.showHelpModal}
    >
      <StepTabs />
    </Modal>
    </>
  );
};
