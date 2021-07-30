import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import { setSearch, clearSearch } from '../../actions'
import Button from '../Button'
import Selector from '../Selector'
import {
  Container,
  Box,
  Label
} from './styled'
import 'react-datepicker/dist/react-datepicker.css'

const ScheduleBar = ({ cities, cart, ...props }) => {
  const d = new Date()
  d.setDate(d.getDate() + 1)

  const initialState = {
    fromValue: null,
    toValue: null,
    from: null,
    to: null,
    date: d,
    passengers: 0,
  }

  const [form, setForm] = useState({ ...initialState })
  const [formValid, setFormValid] = useState(false)
  const [citiesList, setCitiesList] = useState([])
  const [citiesListFrom, setCitiesListFrom] = useState([])
  const [citiesListTo, setCitiesListTo] = useState([])

  useEffect(() => {
    if(cities.cities.length > 0) {
      const list = cities.cities.map(({ city_name, id }) => ({ value: id, label: city_name }))
      setCitiesListFrom(list)
      setCitiesListTo(list)
      setCitiesList(list)
    }
  }, [cities])

  useEffect(() => {
    if(form.from !== null && form.to !== null && form.date !== null && form.passengers > 0) {
      setFormValid(true)
    } else setFormValid(false)
    /// validate no-repeat city on select
    if(form.from !== null) {
      // when the new value is equal to a existing value, reset the old value
      if(form.from === form.to) setForm({ ...form, to: null, toValue: null })
      // when city is selectd delete from the other slect list
      const newlist = citiesListTo.filter(({ value }) => value !== form.from)
      // set the filtered list
      setCitiesListTo([ ...newlist ])
      // restore the current list
      setCitiesListFrom([ ...citiesList ])
    } else if (form.to !== null) {
      // when the new value is equal to a existing value, reset the old value
      if(form.to === form.from) setForm({ ...form, from: null, fromValue: null })
        // when city is selectd delete from the other slect list
      const newlist = citiesListFrom.filter(({ value }) => value !== form.to)
      // set the filtered list      
      setCitiesListFrom([ ...newlist ])
      // restore the current list
      setCitiesListTo([ ...citiesList ])
    }
  }, [form])

  useEffect(() => {
    if(cart.searchReset) {
      props.clearSearch()
      setForm({ ...initialState })
    }
  }, [cart.searchReset])

  const onChange = ({ value, label }, field, valueField) => {
    const newForm = form
    newForm[field] = value
    newForm[valueField] = { value, label }
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
        <Select
          onChange={(e) => onChange(e, 'from', 'fromValue')}
          options={citiesListFrom}
          value={form.fromValue}
        />
      </Box>
      <Box>
        <Label>Destino</Label>
        <Select
          onChange={(e) => onChange(e, 'to', 'toValue')}
          options={citiesListTo}
          value={form.toValue}
        />
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
        <Selector value={form.passengers} getValue={(e) => onChangeWithValue(e, 'passengers') } options={cities} />
      </Box>
      <Box flex="2">
        <Button onClick={search} disabled={!formValid} text='Buscar' primary/>
      </Box>
    </Container>
  )
}

const mapStateToProps = ({ cities, cart }) => ({
  cities,
  cart
})

const mapDispatchToProps = {
  setSearch,
  clearSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleBar)
