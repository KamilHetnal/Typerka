import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Header, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import PlayersList from './players/PlayersList'


export default observer(function TeamPlayersList() {
  const { playerStore } = useStore()
  const { playerRegistry, loadPlayers, groupedPlayers } = playerStore
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id || playerRegistry.size >= 1) {
      loadPlayers()
    }
  }, [id, playerRegistry.size, loadPlayers])

  groupedPlayers.forEach(players => {
    players[1] = players[1].filter(p => p.teamId === id)
  })

  return (
    <Segment.Group>
      <Segment>
        <Header as={'h4'}>
          <Grid columns={2}>
            <Grid.Column width={12}>Gracz</Grid.Column>
            <Grid.Column textAlign='center' width={4}>Gole</Grid.Column>
          </Grid>
        </Header>
      </Segment>
      <PlayersList />
    </Segment.Group>
  )
})
