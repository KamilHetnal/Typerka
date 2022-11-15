import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Grid, Header } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import TeamForm from '../form/TeamForm'
import TeamInfo from './TeamInfo'
import TeamMatchesList from './TeamMatchesList'
import TeamPlayersList from './TeamPlayersList'


export default observer(function TeamDetails() {
    const { teamStore, matchStore, userStore: { getRoles }, modalStore: { openModal } } = useStore();
    const { team, loadTeam, loadingInitial } = teamStore;
    const { matches, loadMatches } = matchStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            loadTeam(id)
        }
    }, [id, loadTeam])
    useEffect(() => {
        if (matches.length <= 1) 
        loadMatches()
    }, [matches, loadMatches])
    
    
    if (loadingInitial || !team) return <LoadingComponent content='Wczytuję...' />
    const teamMatches = matches.filter(x => x.awayTeam?.id === team?.id || x.homeTeam?.id == team?.id)
    const decodedRoles = getRoles();

    return (
        <Container text>
            <TeamInfo team={team} />
            {decodedRoles?.includes('admin') ?
                <Button
                    content='Edytuj Drużynę'
                    primary
                    onClick={() => openModal(<TeamForm id={team.id} />)} />
                :
                <></>
            }
            <Grid columns={2}>
                <Grid.Column>
                    <Header as={'h2'} textAlign='center' content={'Skład'} />
                    <TeamPlayersList players={team.players} />
                </Grid.Column>
                <Grid.Column>
                    <Header as={'h2'} textAlign='center' content={'Mecze'} />
                    <TeamMatchesList matches={teamMatches} />
                </Grid.Column>
            </Grid>
        </Container>
    )
})
