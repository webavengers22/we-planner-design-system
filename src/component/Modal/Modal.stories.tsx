import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { ModalProps } from '.';
import Button from '../Button';

export default {
  title: 'Component/Modal',
  component: Modal,
} as Meta;

export const Default: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Modal.Header className="font-bold">모달 Header</Modal.Header>

        <Modal.Body>모달 Body</Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export const CloseButton: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Button
          size="sm"
          className="absolute right-2 top-2"
          onClick={toggleVisible}
        >
          ✕
        </Button>
        <Modal.Header className="font-bold">모달 Header</Modal.Header>

        <Modal.Body>모달 Body</Modal.Body>
      </Modal>
    </div>
  );
};

export const ClickedOutside: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold">모달 Header</Modal.Header>

        <Modal.Body>모달 Body</Modal.Body>
      </Modal>
    </div>
  );
};
