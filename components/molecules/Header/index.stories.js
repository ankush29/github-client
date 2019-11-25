import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../..';

storiesOf('molecules/Header', module)
  .add('default', () => (
    <Header />
  ))
  .add('with title', () => (
    <Header title="Home" />
  ));
