import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Container, Grid, List} from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store'

export default observer(function TopScorerBetsDashboard() {
    const { topScorerStore, profileStore, playerStore } = useStore();
    const { loadTopScorerBets, groupedBets } = topScorerStore;
    const { loadProfiles, profiles } = profileStore
    const { loadPlayers, playersOnPosition } = playerStore

    useEffect(() => {
        if (profiles?.length === 0)
            loadProfiles()
    }, [profiles, loadProfiles]);
    useEffect(() => {
        if (playersOnPosition?.length <= 2)
            loadPlayers()
    }, [playersOnPosition, loadPlayers]);

    useEffect(() => {
        if (groupedBets.length === 0)
            loadTopScorerBets()
    }, [groupedBets.length, loadTopScorerBets]);

    const gridStyle = {
        backgroundColor: 'white',
        borderTop: '0.2em solid #2185d0',
        borderRadius: 5,
        marginTop: '1em'
    }

    return (
        <Container text>
            {groupedBets.map(([group, bets]) => (
                <Grid key={group} columns={2} style={gridStyle} divided>
                    <Grid.Column>
                        <Grid columns={2}>
                            <Grid.Column>
                                {playersOnPosition.find(p => p.id === group)?.name}
                            </Grid.Column>
                            <Grid.Column>
                                {playersOnPosition.find(p => p.id === group)?.goals}
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column>
                        {bets.map((bet) => (
                            <List key={bet.id} as='ul'>
                                <List as='li'>
                                    {profiles?.find(p => p.id === bet.appUserId)?.displayName}
                                </List>
                            </List>
                        ))}
                    </Grid.Column>
                </Grid>
            ))}
        </Container>
    )
})
