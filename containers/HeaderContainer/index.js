import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderWithSwipeableMenu } from 'components';
import GithubLoginButtonContainer from 'containers/GithubLoginButtonContainer';

function HeaderContainer(props) {
  console.log('props----',props)
  const [ leftMenuIsOpened, setLeftMenuIsOpened ] = useState(false)

  const toggleLeftMenuShow = (status) => {
    console.log('status..',status)

    setLeftMenuIsOpened(status)
  }

  return(
    <HeaderWithSwipeableMenu
      title={props.title}
      leftMenuIsOpened={leftMenuIsOpened}
      openMenu={() => toggleLeftMenuShow(true)}
      closeMenu={() => toggleLeftMenuShow(false)}
      loginButtonContainer={<GithubLoginButtonContainer />}
    />
  )
}

HeaderContainer.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeaderContainer;