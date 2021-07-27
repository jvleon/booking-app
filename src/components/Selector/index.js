import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {
  Container,
  IconContainer,
  StyledInput,
  Button
} from './styled'

const Selector = () => (
  <Container>
    <IconContainer>
      <Button>
        <FaMinus />
      </Button>
    </IconContainer>
    <StyledInput />
    <IconContainer>
      <Button>
        <FaPlus />
      </Button>
    </IconContainer>
  </Container>
)

export default Selector
