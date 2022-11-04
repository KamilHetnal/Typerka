import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Menu, Image, Dropdown, Button } from "semantic-ui-react";
import LoginForm from "../../features/users/LoginForm";
import RegisterForm from "../../features/users/RegisterForm";
import { useStore } from "../stores/store";
import AdminList from "./adminList";

export default observer(function NavBar() {
    const { modalStore, userStore: { user, logout, isLoggedin } } = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container >
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} /> Bet at Bed
                </Menu.Item>
                <Menu.Item as={NavLink} to='/matches' name="Mecze" />
                <Menu.Item as={NavLink} to='/teams' name="Reprezentacje" />
                <Menu.Item as={NavLink} to='/groups' name="Grupy" />
                {isLoggedin ? (
                    <>
                        <AdminList />
                        <Menu.Item position="right">
                            <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                            <Dropdown pointing='top left' text={user?.displayName}>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text="Moje Konto" icon='user' />
                                    <Dropdown.Item onClick={logout} text='Wyloguj się' icon='power' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </>
                ) : (
                    <Menu.Item position="right">
                        <Button.Group>
                            <Button
                                inverted
                                size="large"
                                onClick={() => modalStore.openModal(<LoginForm />)}
                                content='Logowanie'
                            />
                            <Button.Or text='lub' />
                            <Button
                                inverted
                                size="large"
                                onClick={() => modalStore.openModal(<RegisterForm />)}
                                content='Rejestracja'
                            />
                        </Button.Group >
                    </Menu.Item>
                )}

                {/* <Menu.Item>
                    <Button positive content="Dodaj" />
                </Menu.Item> */}
            </Container>
        </Menu>
    )
})