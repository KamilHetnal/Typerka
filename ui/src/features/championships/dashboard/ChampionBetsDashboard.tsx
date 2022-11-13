import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Container, Grid, Header, List } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function ChampionBetsDashboard() {
  const { championBetStore, profileStore, teamStore } = useStore();
  const { loadChampionBets, groupedBets } = championBetStore;
  const { loadProfiles, profiles } = profileStore
  const { loadTeams, teamsInGroups } = teamStore

  useEffect(() => {
    if (profiles?.length === 0)
      loadProfiles()
  }, [profiles, loadProfiles]);
  useEffect(() => {
    if (teamsInGroups?.length === 0)
      loadTeams()
  }, [teamsInGroups.length, loadTeams]);


  useEffect(() => {
    if (groupedBets.length === 0)
      loadChampionBets()
  }, [groupedBets.length, loadChampionBets]);

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
            <Header as={'h3'} content={teamsInGroups.find(p => p.id === group)?.name} />
          </Grid.Column>
          <Grid.Column>
            {bets.map((bet) => (
              <List key={bet.id} as='ul'>
                <List.Item as='li'>
                  {profiles?.find(p => p.id === bet.appUserId)?.displayName}
                </List.Item>
              </List>
            ))}
          </Grid.Column>
        </Grid>
      ))}
    </Container>
  )
})
