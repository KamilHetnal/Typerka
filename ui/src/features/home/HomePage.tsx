import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import LoginForm from '../users/LoginForm'
import RegisterForm from '../users/RegisterForm'

export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();

    return (
        <Container style={{ marginTop: '7em' }} text>
            <Header>
                Home page
            </Header>
            {userStore.isLoggedin ? (
                <>
                    <Header as='h2' content="Bo pierwszy milion trzeba wygrać" />
                </>
            ) : (
                <>
                <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' >
                    Zaloguj się
                </Button>
                <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' >
                    Rejestacja
                </Button>
                </>
            )}
        </Container>
    )
})
