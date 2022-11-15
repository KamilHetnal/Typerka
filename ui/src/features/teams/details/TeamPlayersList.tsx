import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import { Player } from '../../../app/models/Player'
import PlayersList from './players/PlayersList'

interface Props {
  players: Player[]
}

export default function TeamPlayersList({players}: Props) {
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
      <PlayersList players={players} />
    </Segment.Group>
  )
}
