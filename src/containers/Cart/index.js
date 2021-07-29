import React from 'react'
import { connect } from 'react-redux'
import { cleanCart } from '../../actions'
import { Container, Title } from './styled'
import CartCard from '../../components/CartCard'

const Cart = ({ orders, ...props }) => (
  <Container>
    {orders.length > 0 ?
      orders.map((order, i) => (
        <CartCard cleanCart={props.cleanCart} {...order} key={i} />
      ))
      :
      (
        <Title>Sin reservas realizadas</Title>
      )
    }
  </Container>
)

const mapStateToProps = ({ cart }) => ({
  orders: cart.orders
})

const mapDispatchToProps = {
  cleanCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
