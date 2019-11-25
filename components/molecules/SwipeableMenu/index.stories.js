import React from 'react';
import { storiesOf } from '@storybook/react';
import { SwipeableMenu } from '../..';

storiesOf('molecules/SwipeableMenu', module)
  .add('opened by default', () => (
    <SwipeableMenu isOpenedByDefault menuItems={['First', 'Second', 'Third']} />
  ));
