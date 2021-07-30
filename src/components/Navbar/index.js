import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import {
  Container,
  ButtonsContainer,
  Brand,
  ButtonNavigation,
  IconPlane,
} from './styled'

const Navbar = ({ orders }) => {
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
        <ButtonNavigation to='/cart'>
          {
            orders.length > 0 && 
            (
              <span>{orders.length}</span>
            )
          }
          <FaShoppingCart size="1.5rem" />
        </ButtonNavigation>
      </ButtonsContainer>
    </Container>
  )
}

const mapStateToProps = ({ cart }) => ({
  orders: cart.orders
})

export default connect(mapStateToProps, null)(Navbar)
