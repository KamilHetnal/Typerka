import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Container, Grid, List} from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store'

export default observer(function TopScorerBetsDashboard() {
    const { topScorerStore, profileStore, playerStore } = useStore();
    const { loadTopScorerBets, betsTopScorers, topScorerBetRegistry } = topScorerStore;
    const { loadProfiles, profiles } = profileStore
    const { loadPlayers, players } = playerStore

    useEffect(() => {
        if (profiles?.length! <= 1)
            loadProfiles()
    }, [profiles, loadProfiles]);
    useEffect(() => {
        if (players?.length <= 1)
            loadPlayers()
    }, [players, loadPlayers]);

    useEffect(() => {
        if (topScorerBetRegistry.size <= 1)
            loadTopScorerBets()
    }, [topScorerBetRegistry.size, loadTopScorerBets]);

    topScorerBetRegistry.forEach(element => {
        runInAction(() => {
          element.topScorerId = (players.find(p => p.id === element.topScorerId)) ?
            players?.find(p => p.id === element.topScorerId)?.name! :
            element.topScorerId;
          element.appUserId = (profiles?.find(p => p.id === element.appUserId)?.displayName)
            ?
            profiles?.find(p => p.id === element.appUserId)?.displayName!
            :
            element.appUserId
        })
      })

    const gridStyle = {
        backgroundColor: 'white',
        borderTop: '0.2em solid #2185d0',
        borderRadius: 5,
        marginTop: '1em'
    }

    return (
        <Container text>
            {betsTopScorers.map(([group, bets]) => (
                <Grid key={group} columns={2} style={gridStyle} divided>
                    <Grid.Column>
                        <Grid columns={2}>
                            <Grid.Column>
                                {group}
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column>
                        {bets.map((bet) => (
                            <List key={bet.id} as='ul'>
                                <List as='li'>
                                    {bet.appUserId}
                                </List>
                            </List>
                        ))}
                    </Grid.Column>
                </Grid>
            ))}
        </Container>
    )
})
