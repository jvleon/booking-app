import React from 'react'
import { connect } from 'react-redux'
import { setToCart } from '../../actions'
import Button from '../Button'
import {
  Container,
  Card,
  Title,
} from './styled'

const SearchResults = ({ search, ...props }) => {
  const save = (index) => {
    props.setToCart(search[index])
  }
  return (
    <Container>
      <Title>Resultados de la busqueda:</Title>
      {
        search.map(({ date, from, to, passengers }, i) => (
          <Card key={i}>
            <div>
              <span className="title">Origen:</span>
              <span>{from.city_name}</span>
            </div>
            <div>
              <span className="title">Destino:</span>
              <span>{to.city_name}</span>
            </div>
            <div>
              <span className="title">Fecha:</span>
              <span>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
            </div>
            <div>
              <span className="title">Hora:</span>
              <span>{`${date.getHours()}:00`}</span>
            </div>
            <div>
              <span className="title">Aerolinea:</span>
              <span>{from.airline}</span>
            </div>
            <div>
              <span className="title">Pasajeros:</span>
              <span>{passengers}</span>
            </div>
            <div>
              <span className="title">Costo:</span>
              <span>$ {from.price}</span>
            </div>
            <Button text='Reservar' onClick={() => save(i)} />
          </Card>

        )) 
      }
    </Container>
  )
}

const mapStateToProps = ({ cart }) => ({
  search: cart.search
})

const mapDispatchToProps = {
  setToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
