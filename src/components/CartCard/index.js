import React, { useState } from 'react'
import Button from '../Button'
import ModalUserData from '../ModalUserData'
import {
  Container,
  Row
} from './styled'

const CartCard = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <Container>
      <ModalUserData show={showModal} closeModal={() => setShowModal(false)}/>
      <Row>
        <div>
          <h4>No orden: #232131222</h4>
        </div>
      </Row>
      <Row>
        <div>
          <span>Aerolinea:</span>
          <span>Aeromexico</span>
        </div>
        <div>
          <span>Fecha:</span>
          <span>10/11/2021 10:00 am</span>
        </div>
      </Row>
      <Row>
        <div>
          <span>Origen</span>
          <span>Destino</span>
        </div>
        <div>
          <span>Aeropuerto:</span>
          <span>AICM</span>
        </div>
      </Row>
      <Row>
        <div>
          <span>Pasajeros:</span>
          <span>8</span>
        </div>
        <div>
          <span>Costo:</span>
          <span>$100.00</span>
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
