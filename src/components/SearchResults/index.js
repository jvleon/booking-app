import React from 'react'
import Button from '../Button'
import {
  Container,
  Card,
  Title,
} from './styled'

const SearchResults = () => (
  <Container>
    <Title>Resultados de la busqueda:</Title>
    <Card>
      <div>
        <span className="title">Fecha:</span>
        <span>05/05/2021</span>
      </div>
      <div>
        <span className="title">Aerolinea:</span>
        <span>Aeromexico</span>
      </div>
      <div>
        <span className="title">Pasajeros:</span>
        <span>2</span>
      </div>
      <div>
        <span className="title">Costo:</span>
        <span>$10,000.00</span>
      </div>
      <Button text='Reservar' />
    </Card>
    <Card>
      <div>
        <span className="title">Fecha:</span>
        <span>05/05/2021</span>
      </div>
      <div>
        <span className="title">Aerolinea:</span>
        <span>Aeromexico</span>
      </div>
      <div>
        <span className="title">Pasajeros:</span>
        <span>2</span>
      </div>
      <div>
        <span className="title">Costo:</span>
        <span>$10,000.00</span>
      </div>
      <Button text='Reservar' />
    </Card>
    <Card>
      <div>
        <span className="title">Fecha:</span>
        <span>05/05/2021</span>
      </div>
      <div>
        <span className="title">Aerolinea:</span>
        <span>Aeromexico</span>
      </div>
      <div>
        <span className="title">Pasajeros:</span>
        <span>2</span>
      </div>
      <div>
        <span className="title">Costo:</span>
        <span>$10,000.00</span>
      </div>
      <Button text='Reservar' />
    </Card>
  </Container>
)

export default SearchResults
