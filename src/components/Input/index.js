import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Label,
  StyledInput
} from './styled'

const Input = ({ onChange, label, value, type, name }) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <StyledInput
        onChange={onChange}
        value={value}
        maxLength="90"
        type={type}
        name={name}
        required
      />
    </Container>
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string
}

export default Input
