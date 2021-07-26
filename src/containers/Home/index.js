import React from 'react'
import { Container, Main, Title } from './styled'
import ScheduleBar from '../../components/SheduleBar'
import Places from '../../components/Places'
import SearchResults from '../../components/SearchResults'

const Home = () => {
  return (
    <Container>
      <Main>
        <Title>Buscar vuelos</Title>
        <ScheduleBar />
        <SearchResults />
      </Main>
      <Places />
    </Container>
  )
}

export default Home
