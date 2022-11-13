import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Container, Grid, GridColumn, Header, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import ChampionshipDashboard from '../championships/dashboard/ChampionshipDashboard'
import LoginForm from '../users/LoginForm'
import RegisterForm from '../users/RegisterForm'
import UpcomingMatches from './logged/UpcomingMatches'
import UsersTable from './logged/UsersTable'

export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();

    return (
        <Container style={{ marginTop: '1em' }}>
            {userStore.isLoggedin ? (
                <Grid columns={3} stackable>
                    <Grid.Row>
                        <GridColumn width={2}></GridColumn>
                        <GridColumn width={12}>
                            <Header size='huge' textAlign='center' content="Bo pierwszy milion trzeba wygrać" />
                        </GridColumn>
                        <GridColumn width={2}></GridColumn>
                    </Grid.Row>
                    <Grid.Row>
                        <GridColumn width={16}>
                            <ChampionshipDashboard />
                        </GridColumn>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header size='medium' textAlign='center' content="Tabela wyników" />
                            <UsersTable />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header size='medium' textAlign='center' content="Najblizsze mecze" />
                            <UpcomingMatches />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            ) : (
                <Segment textAlign="center" vertical>
                    <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' >
                        Zaloguj się
                    </Button>
                    <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' >
                        Rejestacja
                    </Button>
                </Segment>
            )}
        </Container>
    )
})
