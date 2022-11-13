import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid, Header} from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import TeamInfo from './TeamInfo'
import TeamMatchesList from './TeamMatchesList'
import TeamPlayersList from './TeamPlayersList'


export default observer(function TeamDetails() {
    const { teamStore, matchStore } = useStore();
    const { team, loadTeam, loadingInitial } = teamStore;
    const {loadMatchesForTeam, matchRegistry} = matchStore;
    const { id } = useParams<{ id: string }>();
  
    useEffect(() => {
        if (id) loadTeam(id)
    }, [id, loadTeam])

    useEffect(() => {
      if (id) {
        matchRegistry.clear();
        loadMatchesForTeam(id)
      }
    }, [id, matchRegistry, loadMatchesForTeam])

    if (loadingInitial || !team) return <LoadingComponent content='Wczytuję...'/>

    return (
        <Container text>
            <TeamInfo team={team} />
            <Grid columns={2}>
                <Grid.Column>
                    <Header as={'h2'} textAlign='center' content={'Skład'} />
                    <TeamPlayersList/>
                </Grid.Column>
                <Grid.Column>
                    <Header as={'h2'} textAlign='center' content={'Mecze'} />
                    <TeamMatchesList />
                </Grid.Column>
            </Grid>
        </Container>
    )
})
