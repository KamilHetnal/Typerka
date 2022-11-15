import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Container, Grid, Header, List } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function ChampionBetsDashboard() {
  const { championBetStore, profileStore, teamStore } = useStore();
  const { loadChampionBets, betsChampions, championBetRegistry, loadingInitial } = championBetStore;
  const { loadProfiles, profiles } = profileStore
  const { loadTeams, teams } = teamStore

  useEffect(() => {
    if (profiles?.length! <= 1)
      loadProfiles()
  }, [profiles?.length, loadProfiles]);
  useEffect(() => {
    if (teams.length <= 1)
      loadTeams()
  }, [teams.length, loadTeams]);


  useEffect(() => {
    if (championBetRegistry.size <= 1)
      loadChampionBets()
  }, [championBetRegistry.size, loadChampionBets]);

  championBetRegistry.forEach(element => {
    runInAction(() => {
      element.championId = (teams.find(t => t.id === element.championId)) ?
        teams?.find(t => t.id === element.championId)?.name! :
        element.championId;
      element.appUserId = (profiles?.find(t => t.id === element.appUserId)?.displayName)
        ?
        profiles?.find(t => t.id === element.appUserId)?.displayName!
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

  if (loadingInitial) { <LoadingComponent content='wczytuję...' /> }
  return (
    <Container text>
      {betsChampions.map(([champion, bets]) => (
        <Grid key={champion} columns={2} style={gridStyle} divided>
          <Grid.Column>
            <Header as={'h3'} content={champion} />
          </Grid.Column>
          <Grid.Column>
            {bets.map((bet) => (
              <List key={bet.id} as='ul'>
                <List.Item as='li'>
                  {bet.appUserId}
                </List.Item>
              </List>
            ))}
          </Grid.Column>
        </Grid>
      ))}
    </Container>
  )
})
