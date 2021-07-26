import React from 'react'
import { Container, Main, Title } from './styled'
import ScheduleBar from '../../components/SheduleBar'
const Home = () => {
  return (
    <Container>
      <Main>
        <Title>Buscar vuelos</Title>
        <ScheduleBar />
      </Main>
    </Container>
  )
}

export default Home
