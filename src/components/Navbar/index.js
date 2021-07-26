import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import {
  Container,
  ButtonsContainer,
  Brand,
  ButtonNavigation,
  IconPlane,
} from './styled'

const Navbar = () => {
  return (
    <Container>
      <Brand>
        <Link to="/">
          <div>
            <IconPlane />
          </div>
          <h1>
            Aterrizar.com
          </h1>
        </Link>
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
