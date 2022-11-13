import { observer } from 'mobx-react-lite'
import React from 'react'
import { Grid, List, Segment } from 'semantic-ui-react'
import { useStore } from '../../../../app/stores/store'

export default observer(function PlayersList() {
    const { playerStore } = useStore()
    const { groupedPlayers } = playerStore

    return (
        <>
            {groupedPlayers.map(([group, players]) => (
                <Segment key={group} >
                        <List >
                            {players.map(player => (
                                <Grid columns={2} key={player.id} >
                                    <Grid.Column>{player.name}</Grid.Column>
                                    <Grid.Column textAlign='right' style={{ paddingRight: '15px' }}>{player.goals}</Grid.Column>
                                </Grid>
                            ))}
                        </List>
                </Segment>
            ))}
        </>
    )
})
