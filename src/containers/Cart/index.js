import React from 'react'
import { connect } from 'react-redux'
import { Container, Title } from './styled'
import CartCard from '../../components/CartCard'

const Cart = ({ orders }) => (
  <Container>
    {orders.length > 0 ?
      orders.map((order, i) => (
        <CartCard {...order} key={i} />
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

export default connect(mapStateToProps, null)(Cart)
