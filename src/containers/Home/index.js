import React from 'react'
import { Container, Main, Title } from './styled'
import ScheduleBar from '../../components/SheduleBar'
import Places from '../../components/Places'

const Home = () => {
  return (
    <Container>
      <Main>
        <Title>Buscar vuelos</Title>
        <ScheduleBar />
      </Main>
      <Places />
    </Container>
  )
}

export default Home
