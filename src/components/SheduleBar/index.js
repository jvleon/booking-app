import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import { setSearch } from '../../actions'
import Button from '../Button'
import Selector from '../Selector'
import {
  Container,
  Box,
  Label
} from './styled'
import 'react-datepicker/dist/react-datepicker.css'


const ScheduleBar = ({ cities, ...props }) => {

  const d = new Date()
  d.setDate(d.getDate() + 1)

  const [form, setForm] = useState({
    from: '',
    to: '',
    date: d,
    passengers: 0,
  })
  const [formValid, setFormValid] = useState(false)
  const [citiesList, setCitiesList] = useState([])

  useEffect(() => {
    if(cities.cities.length > 0) {
      const list = cities.cities.map(({ city_name, id }) => ({ value: id, label: city_name }))
      setCitiesList(list)
    }
  }, [cities])

  useEffect(() => {
    if(form.from !== '' && form.to !== '' && form.date !== '' && form.passengers > 0) {
      setFormValid(true)
    } else setFormValid(false)
  }, [form])

  const onChange = ({ value }, field) => {
    const newForm = form
    newForm[field] = value
    setForm({ ...newForm })
  }
  
  const onChangeWithValue = (value, field) => {
    const newForm = form
    newForm[field] = value
    setForm({ ...newForm })
  }

  const search = () => {
    // randomly generate between 5 and 3 availables flights range
    const number = Math.random() * (5 - 3) + 3
    const flights = []
    // default hours
    const hours = [2, 5, 8, 10, 16, 20]
    // generate flights from a random number between 5 and 3
    for(let x = 0; x < number; x++) {
      // get complete data from DB using the city id
      const from = cities.cities.filter(({ id }) => id === form.from)
      const to = cities.cities.filter(({ id }) => id === form.to)
      const newDate = new Date(form.date.setHours(hours[x]))
      let flight = {
        ...form,
        id: `#${x}${Date.now()}`,
        from: from[0],
        to: to[0],
        date: newDate
      }
      flights.push(flight)
    }
    props.setSearch(flights)
  }

  return (
    <Container>
      <Box>
        <Label>Origen</Label>
        <Select onChange={(e) => onChange(e, 'from')} options={citiesList} />
      </Box>
      <Box>
        <Label>Destino</Label>
        <Select onChange={(e) => onChange(e, 'to')} options={citiesList} />
      </Box>
      <Box flex="5">
        <Label>Fecha</Label>
        <DatePicker
          selected={form.date}
          onChange={(date) => onChangeWithValue(date, 'date')}
          wrapperClassName="datePicker"
          placeholderText="Seleccionar fecha"
        />      
      </Box>
      <Box flex="1">
        <Label>Pasajeros</Label>
        <Selector getValue={(e) => onChangeWithValue(e, 'passengers') } options={cities} />
      </Box>
      <Box flex="2">
        <Button onClick={search} disabled={!formValid} text='Buscar' primary/>
      </Box>
    </Container>
  )
}

const mapStateToProps = ({ cities }) => ({
  cities
})

const mapDispatchToProps = {
  setSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleBar)
