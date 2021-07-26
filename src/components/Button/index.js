import React from 'react'
import { StyledButton } from './styled'

const Button = ({ text, ...props }) => (
  <StyledButton {...props}>
    {text}
  </StyledButton>
)

export default Button
