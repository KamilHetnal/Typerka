import { observer } from 'mobx-react-lite'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Grid, Segment, Image } from 'semantic-ui-react'
import { Player } from '../../../../app/models/Player'
import { useStore } from '../../../../app/stores/store'
import PlayerForm from '../../form/PlayerForm'

interface Props {
    players: Player[]
}

export default observer(function PlayersList({ players }: Props) {
    const { userStore: { getRoles }, modalStore: { openModal } } = useStore()
    const teamPlayers = players.slice().sort((a, b) => a.goals === b.goals ? a.name.localeCompare(b.name) : b.goals - a.goals)

    const decodedRoles = getRoles();
    return (
        <Segment>
            {teamPlayers.length > 0 ?
                <>
                    {teamPlayers.map(player => (
                        <Grid columns={2} key={player.id} >
                            <Grid.Column width={12}>
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
                            <Grid.Column textAlign='center' width={4}>{player.goals}</Grid.Column>
                        </Grid>
                    ))
                    }
                </>
                :
                    <Segment basic style={{height: '1000px'}}>
                    </Segment>
            }
        </Segment>
    )
})
