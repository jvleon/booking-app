import React from 'react'
import {
  Container,
  Box,
  Title
} from './styled'

const Places = () => (
  <Container>
    <Title>Nuestros destinos</Title>
    <Box>
      <h3>Berlin</h3>
      <img src="https://i.ibb.co/ZSS5wxh/berlin.jpg" alt="berlin" border="0"/>
    </Box>
    <Box>
      <h3>Londres</h3>
      <img src="https://i.ibb.co/5r77RwH/londres.jpg" alt="londres" border="0"/>
    </Box>
    <Box>
      <h3>Mexico</h3>
      <img src="https://i.ibb.co/gFVXDb1/mexico-city.jpg" alt="mexico-city" border="0"/>
    </Box>
    <Box>
      <h3>Moscu</h3>
      <img src="https://i.ibb.co/HNJJ6b7/moscu.jpg" alt="moscu" border="0"/>
    </Box>
    <Box>
      <h3>Nueva york</h3>
      <img src="https://i.ibb.co/37R2W7f/new-york.jpg" alt="new-york" border="0"/>
    </Box>
    <Box>
      <h3>Paris</h3>
      <img src="https://i.ibb.co/YPFNDdQ/paris.jpg" alt="paris" border="0"/>
    </Box>
  </Container>
)

export default Places
