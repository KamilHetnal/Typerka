import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Grid, List, Segment } from 'semantic-ui-react'
import { useStore } from '../../../../app/stores/store'
import PlayerForm from '../../form/PlayerForm'

export default observer(function PlayersList() {
    const { playerStore, userStore: { getRoles }, modalStore: { openModal } } = useStore()
    const { groupedPlayers } = playerStore



    const decodedRoles = getRoles();
    return (
        <>
            {groupedPlayers.map(([group, players]) => (
                <Segment key={group} >
                    <List >
                        {players.map(player => (
                            <Grid columns={2} key={player.id} >
                                <Grid.Column>
                                    {decodedRoles?.includes('admin') ?
                                        <Button
                                            circular
                                            icon='edit'
                                            size='mini'
                                            primary
                                            onClick={() => openModal(<PlayerForm id={player.id} />)}
                                        />
                                        :
                                        <></>
                                    }
                                    {player.name}
                                </Grid.Column>
                                <Grid.Column textAlign='right' style={{ paddingRight: '15px' }}>{player.goals}</Grid.Column>
                            </Grid>
                        ))}
                    </List>
                </Segment>
            ))}
        </>
    )
})
