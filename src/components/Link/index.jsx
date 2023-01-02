import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LinkButton } from './styled';
import { setVisibilityFilter } from '../../actions/setVisibilityFilter';

function Link({ filter, children }) {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.filter.filter);
  return (
    <LinkButton
      onClick={() => dispatch(setVisibilityFilter(filter))}
      disabled={filter === visibilityFilter}
      style={{
        marginLeft: '4px'
      }}>
      {children}
    </LinkButton>
  );
}

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
