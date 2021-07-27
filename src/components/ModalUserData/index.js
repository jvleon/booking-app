import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Input from '../Input'
import {
  Base,
  Modal,
  ModalForm,
  ModalRow,
} from './styled'

const ModalUserData = ({ show, closeModal }) => (
  <Base show={show}>
    <Modal>
      <ModalForm>
        <ModalRow>
          <Input
            label="Nombre(s)"
          />
        </ModalRow>
        <ModalRow>
          <Input
            label="Apellido(s)"
          />
        </ModalRow>
        <ModalRow>
          <Input
            label="Dirección"
          />
        </ModalRow>
        <ModalRow>
          <Input
            label="Correo electronico"
            type="email"
          />
        </ModalRow>
        <ModalRow>
          <Button onClick={closeModal} type="button" text="Cancelar"/>
          <Button text="Guardar" primary/>
        </ModalRow>
      </ModalForm>
    </Modal>
  </Base>  
)

ModalUserData.defaultProps = {
  show: false
}

ModalUserData.propTypes = {
  show: PropTypes.bool.isRequired
}

export default ModalUserData
