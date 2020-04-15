import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const NavHeaderEx = ({
  collapsed
}) => React.createElement(React.Fragment, null, React.createElement("div", {
  style: {
    padding: collapsed ? 8 : 16,
    transition: '0.3s'
  }
}, React.createElement(Avatar, {
  style: {
    width: collapsed ? 48 : 60,
    height: collapsed ? 48 : 60,
    transition: '0.3s'
  }
}), React.createElement("div", {
  style: {
    paddingBottom: 16
  }
}), React.createElement(Typography, {
  variant: 'h6',
  noWrap: true
}, "Mui Treasury"), React.createElement(Typography, {
  color: 'textSecondary',
  noWrap: true,
  gutterBottom: true
}, "muitreasury@ui.com")), React.createElement(Divider, null));

NavHeaderEx.propTypes = {
  collapsed: PropTypes.bool.isRequired
};
NavHeaderEx.defaultProps = {};
export default NavHeaderEx;