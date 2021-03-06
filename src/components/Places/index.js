import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Box,
  Title,
  Placesbox
} from './styled'

const Places = ({ cities }) => (
  <Container>
    <Title>Nuestros destinos</Title>
    <Placesbox>
      {
        cities.cities.map(({ city_name, image_url }, i) => (
          <Box key={i}>
            <h3>{city_name}</h3>
            <img src={image_url} alt="berlin" border="0"/>
          </Box>
        ))
      }
    </Placesbox>
  </Container>
)

const mapStateToProps = ({ cities }) => ({
  cities
})

export default connect(mapStateToProps, null)(Places)
