import React from 'react'
import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions/VisibilityFilters'
import  {ShowSpan,FooterWrapper} from './styled'




const Footer = () => (//использовать map
  <FooterWrapper>
    <ShowSpan>Show: </ShowSpan>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </FooterWrapper>
)

export default Footer