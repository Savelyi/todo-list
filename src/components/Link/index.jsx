import React from 'react'
import PropTypes from 'prop-types'
import { LinkButton } from './styled'


const Link = ({ active, children, onClick }) => (//inline стили убрать
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