import React, { useState, useEffect } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {
  Container,
  IconContainer,
  StyledInput,
  Button
} from './styled'

const Selector = ({ getValue }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    getValue(counter)
  }, [counter])


  const onChange = ({ target: { value } }) => {
    let data = parseInt(value)
    if(data < 0) data = 0
    setCounter(data)
  }

  const decrement = () => {
    let value = counter
    value = value - 1
    setCounter(value)
  }

  const increment = () => {
    let value = counter
    value = value + 1
    setCounter(value)
  }

  return (
    <Container>
      <IconContainer>
        <Button disabled={counter === 0} onClick={decrement}>
          <FaMinus />
        </Button>
      </IconContainer>
      <StyledInput
        type="number"
        value={counter}
        onChange={onChange}
        min={0}
      />
      <IconContainer>
        <Button onClick={increment}>
          <FaPlus />
        </Button>
      </IconContainer>
    </Container>
  )
}

export default Selector
