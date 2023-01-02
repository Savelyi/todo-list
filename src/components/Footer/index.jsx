import React from 'react';
// import FilterLink from '../../containers/FilterLink';
import { VisibilityFilters } from '../../actions/VisibilityFilters';
import { ShowSpan, FooterWrapper } from './styled';
import MyLink from '../Link/index';

function Footer() {
  return (
    <FooterWrapper>
      <ShowSpan>Show: </ShowSpan>
      <MyLink filter={VisibilityFilters.SHOW_ALL}>All</MyLink>
      <MyLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</MyLink>
      <MyLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</MyLink>
    </FooterWrapper>
  );
}

export default Footer;
