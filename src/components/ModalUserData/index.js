import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications';
import PropTypes from 'prop-types'
import Button from '../Button'
import Input from '../Input'
import {
  Base,
  Modal,
  ModalForm,
  ModalRow,
} from './styled'

const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ModalUserData = ({ show, closeModal, setParentForm }) => {
  const [formValid, setFormValid] = useState(false)

  const [form, setForm] = useState({
    name: '',
    lastName: '',
    address: '',
    email: ''
  })

  const { addToast } = useToasts()

  const save = () => {
    addToast(
      'Datos guardados',
      { appearance: 'success', autoDismiss: true }
    )
    setParentForm({ ...form })
    closeModal()
  }

  const onChange = ({ target: { value, name } }, regex = false) => {
    if(regex && !regex.test(value)) return
    const newForm = form
    newForm[name] = value
    setForm({ ...newForm })
  }

  useEffect(() => {
    if(form.name !== '' && form.lastName !== '' && form.address !== '' && regex.test(form.email)) {
      setFormValid(true)
    }
  }, [form])


  return (
    <Base show={show}>
      <Modal>
        <ModalForm>
          <ModalRow>
            <Input
              onChange={(e) => onChange(e)}
              label="Nombre(s)"
              name="name"
            />
          </ModalRow>
          <ModalRow>
            <Input
              onChange={(e) => onChange(e)}
              label="Apellido(s)"
              name="lastName"
            />
          </ModalRow>
          <ModalRow>
            <Input
              onChange={(e) => onChange(e)}
              label="Dirección"
              name="address"
            />
          </ModalRow>
          <ModalRow>
            <Input
              onChange={(e) => onChange(e, regex)}
              label="Correo electronico"
              type="email"
              name="email"
            />
          </ModalRow>
          <ModalRow>
            <Button onClick={closeModal} type="button" text="Cancelar"/>
            <Button onClick={save} disabled={!formValid} text="Guardar" primary/>
          </ModalRow>
        </ModalForm>
      </Modal>
    </Base>  
  )
}

ModalUserData.defaultProps = {
  show: false
}

ModalUserData.propTypes = {
  show: PropTypes.bool.isRequired
}

export default ModalUserData
