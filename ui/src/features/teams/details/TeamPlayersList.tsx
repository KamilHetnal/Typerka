import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Header, Segment } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import PlayersList from './players/PlayersList'


export default observer(function TeamPlayersList() {
  const { playerStore } = useStore()
  const { playerRegistry, loadPlayersInTeam, loadingInitial } = playerStore
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if(id) {
      playerRegistry.clear();
      loadPlayersInTeam(id)
    }
  }, [id,playerRegistry, loadPlayersInTeam])

  if (loadingInitial) return <LoadingComponent content='Zbieram dane' />

  return (
    <Segment.Group>
      <Segment>
        <Header as={'h4'}>
          <Grid columns={2}>
            <Grid.Column>Gracz</Grid.Column>
            <Grid.Column textAlign='right' style={{ paddingRight: '5px' }}>Gole</Grid.Column>
          </Grid>
        </Header>
      </Segment>
      <PlayersList />
    </Segment.Group>
  )
})
