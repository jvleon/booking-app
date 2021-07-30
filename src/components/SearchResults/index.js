import React from 'react'
import { connect } from 'react-redux'
import { useToasts } from 'react-toast-notifications';
import { setToCart, resetSearch } from '../../actions'
import Button from '../Button'
import {
  Container,
  Card,
  Title,
} from './styled'


const SearchResults = ({ search, ...props }) => {
  const { addToast } = useToasts()

  const save = (index) => {
    props.setToCart(search[index])
    props.resetSearch()
    addToast(
      'Reserva agregada al carrito',
      { appearance: 'success', autoDismiss: true }
    )
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
  setToCart,
  resetSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
