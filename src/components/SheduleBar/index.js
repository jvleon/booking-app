import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import Button from '../Button'
import Selector from '../Selector'
import {
  Container,
  Box,
  Label
} from './styled'
import 'react-datepicker/dist/react-datepicker.css'

const cities = [
  {
    value: '0',
    label: 'New york'
  }
]

const ScheduleBar = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Container>
      <Box>
        <Label>Origen</Label>
        <Select options={cities} />
      </Box>
      <Box>
        <Label>Destino</Label>
        <Select options={cities} />
      </Box>
      <Box flex="5">
        <Label>Fecha</Label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          wrapperClassName="datePicker"
        />      
      </Box>
      <Box flex="1">
        <Label>Pasajeros</Label>
        <Selector options={cities} />
      </Box>
      <Box flex="2">
        <Button text='Buscar' primary/>
      </Box>
    </Container>
  )
}

export default ScheduleBar
