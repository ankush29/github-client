import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  List, ListItem, ListItemText, SwipeableDrawer,
} from '../..';

const MyButton = React.forwardRef(({ onClick, href, text }, ref) => (

  <ListItem button onClick={onClick} ref={ref}>
    <ListItemText primary={text}>
      <a href={href} onClick={onClick} ref={ref}>
        {text}
      </a>
    </ListItemText>
  </ListItem>
));

const SwipeableMenu = (props) => {
  const {
    menuItems, openMenu, closeMenu, isOpenedByDefault,
  } = props;

  return (
    <SwipeableDrawer
      open={isOpenedByDefault}
      onClose={closeMenu}
      onOpen={openMenu}
    >
      <List>
        {menuItems.map((item) => (
          <Link key={item.id} href={item.url}>
            <MyButton text={item.text} />
          </Link>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

SwipeableMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isOpenedByDefault: PropTypes.bool,
};

SwipeableMenu.defaultProps = {
  isOpenedByDefault: false,
};

export default SwipeableMenu;
