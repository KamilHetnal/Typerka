import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import LoginForm from '../users/LoginForm'
import RegisterForm from '../users/RegisterForm'
import Rules from './logged/Rules'
import UpcomingMatches from './logged/UpcomingMatches'
import UsersTable from './logged/UsersTable'

export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();

    return (
        <Container style={{ marginTop: '9em' }}>
            {userStore.isLoggedin ? (
                <>
                    <Header size='huge' textAlign='center' content="Bo pierwszy milion trzeba wygrać" />
                    <Rules />
                    <Grid columns={2} divided style={{ marginTop: '2em' }}>
                        <Grid.Column>
                            <Header size='medium' textAlign='center' content="Najblizsze mecze" />
                            <UpcomingMatches />
                        </Grid.Column>
                        <Grid.Column>
                            <Header size='medium' textAlign='center' content="Tabela wyników" />
                            <UsersTable />
                        </Grid.Column>
                    </Grid>
                </>
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
