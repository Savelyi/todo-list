import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LinkButton=styled.button`
border-radius: 15px;
width: 205px;
margin-top: 3px;
vertical-align:top;
height: 70px;
`

const Link = ({ active, children, onClick }) => (
  <LinkButton
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </LinkButton>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link