import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DB from '../../database.config'
import { getCities } from '../../actions'
import { Container, Main, Title } from './styled'
import ScheduleBar from '../../components/SheduleBar'
import Places from '../../components/Places'
import SearchResults from '../../components/SearchResults'

const Home = ({ search, ...props }) => {
  useEffect(() => {
    DB.ref('/cities').once('value', (snapshot) => {
      const data = snapshot.val()
      props.getCities(data)
    })
  }, [])

  return (
    <Container>
      <Main>
        <Title>Buscar vuelos</Title>
        <ScheduleBar />
        {
          search.length > 0 &&
            <SearchResults />
        }
      </Main>
      <Places />
    </Container>
  )
}

const mapStateToProps = ({ cart }) => ({
  search: cart.search
})

const mapDispatchToProps = {
  getCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
