import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {
  Container,
  ButtonsContainer,
  Brand,
  ButtonNavigation,
  Icon,
} from './styled'

const Navbar = () => {
  return (
    <Container>
      <Brand>
        <span>
          Aterrizar
        </span>
        <div>
          <Icon />
        </div>
      </Brand>
      <ButtonsContainer>
        <ButtonNavigation to='/login'>Login</ButtonNavigation>
        <ButtonNavigation to='/help'>Help</ButtonNavigation>
        <ButtonNavigation to='/cart'>
          <FaShoppingCart size="1.3rem" />
        </ButtonNavigation>
      </ButtonsContainer>
    </Container>
  )
}

export default Navbar
