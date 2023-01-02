import React from 'react';
import { VisibilityFilters } from '../../actions/VisibilityFilters';
import { ShowSpan, FooterWrapper } from './styled';
import FilterLink from '../Link/index';

function Footer() {
  return (
    <FooterWrapper>
      <ShowSpan>Show: </ShowSpan>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </FooterWrapper>
  );
}

export default Footer;
