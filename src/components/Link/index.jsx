import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '@actions/setVisibilityFilter';
import { LinkButton } from './styled';

function Link({ filter, children }) {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.filter.filter);

  const handleClick = () => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <LinkButton onClick={handleClick} disabled={filter === visibilityFilter}>
      {children}
    </LinkButton>
  );
}

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
