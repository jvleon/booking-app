import React, { useState } from 'react'
import Button from '../Button'
import ModalUserData from '../ModalUserData'
import {
  Container,
  Row
} from './styled'

const CartCard = ({ date, from, to, id, passengers, ...props}) => {
  const [showModal, setShowModal] = useState(false)
  console.log('>>', props)
  return (
    <Container>
      <ModalUserData show={showModal} closeModal={() => setShowModal(false)}/>
      <Row>
        <div>
          <h4>No orden: {id}</h4>
        </div>
      </Row>
      <Row>
        <div>
          <span>Aerolinea:</span>
          <span>{from.airline}</span>
        </div>
        <div>
          <span>Fecha:</span>
          <span>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`} {`${date.getHours()}:00`}</span>
        </div>
      </Row>
      <Row>
        <div>
          <span>Origen:</span>
          <span>{from.city_name}</span>
        </div>
        <div>
          <span>Destino:</span>
          <span>{to.city_name}</span>
        </div>
      </Row>
      <Row>
        <div>
          <span>Pasajeros:</span>
          <span>{passengers}</span>
        </div>
        <div>
          <span>Costo:</span>
          <span>${from.price}</span>
        </div>
      </Row>
      <Row flexEnd>
        <div>
          <Button
            onClick={() => setShowModal(!showModal)}
            text='Completar datos'
          />
          <Button primary text='Reservar' disabled={false} />
        </div>
      </Row>
    </Container>  
  )

}

export default CartCard
