import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import { Bet } from '../../../app/models/Bet'
import { useStore } from '../../../app/stores/store'
interface Props {
    bets: Bet[]
}

export default observer(function MatchDetailsBets({ bets }: Props) {
    const { profileStore: { loadProfiles, profiles }, userStore: {getRoles}, betStore: {deleteBet}  } = useStore()

    useEffect(() => {
        if (profiles?.length! <= 1)
            loadProfiles()
    }, [profiles?.length, loadProfiles])

    const decodedRoles = getRoles()

    bets.forEach((element) => {
        runInAction(() => {
            element.appUserName = (profiles?.find(t => t.id === element.appUserId)?.displayName)
                ?
                profiles?.find(t => t.id === element.appUserId)?.displayName!
                :
                element.appUserId
        })
    })

    return (
        <Segment>
            {bets.map((bet) => (
                <Grid columns={4} key={bet.id}>
                    <Grid.Row textAlign='center'>
                        {decodedRoles?.includes('admin') ?
                        <Grid.Column width={1}>
                            <Button 
                            negative circular size='mini' icon={'delete'}
                            onClick={() => deleteBet(bet.id)}/>
                        </Grid.Column>
                        :
                        <Grid.Column width={1}>
                        </Grid.Column>    
                    }
                        <Grid.Column>
                            <b>
                                {bet.appUserName}
                            </b>
                        </Grid.Column>
                        <Grid.Column>
                            {bet.homeScore} : {bet.awayScore}
                        </Grid.Column>
                        <Grid.Column>
                            {bet.betPoints}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            ))}
        </Segment>
    )
})
