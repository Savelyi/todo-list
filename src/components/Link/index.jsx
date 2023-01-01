import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton } from './styled';

function Link({ active, children, onClick }) {
  return (
    <LinkButton
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}>
      {children}
    </LinkButton>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
