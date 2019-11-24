import React from 'react';
import { storiesOf } from '@storybook/react';
import { HeaderWithSwipeableMenu } from 'components';
import { action } from '@storybook/addon-actions';

storiesOf('organisms/HeaderWithSwipeableMenu', module)
	.add('default with click events', () => (
		<HeaderWithSwipeableMenu openMenu={action('open')} />
	))
	.add('openedByDefault', () => (
		<HeaderWithSwipeableMenu leftMenuIsOpened />
	))