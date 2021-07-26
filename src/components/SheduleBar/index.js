import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import Button from '../Button'
import Selector from '../Selector'
import {
  Container,
  Box
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
        <Select options={cities} />
      </Box>
      <Box>
        <Select options={cities} />
      </Box>
      <Box flex="5">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          wrapperClassName="datePicker"
        />      
      </Box>
      <Box flex="1">
        <Selector options={cities} />
      </Box>
      <Box flex="2">
        <Button text='Buscar' />
      </Box>
    </Container>
  )
}

export default ScheduleBar