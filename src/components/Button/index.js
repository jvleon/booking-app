import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = ({ text, ...props }) => (
  <StyledButton {...props}>
    {text}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Button
