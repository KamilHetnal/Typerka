import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer(function NavBar() {
    const { userStore: { user, logout } } = useStore();


    return (
        <Menu inverted fixed='top'>
            <Container >
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} /> Bet at Bed
                </Menu.Item>
                <Menu.Item as={NavLink} to='/matches' name="Mecze" />
                <Menu.Item as={NavLink} to='/teams' name="Reprezentacje" />
                <Menu.Item as={NavLink} to='/groups' name="Grupy" />
                <Menu.Item as={NavLink} to='/errors' name="Błędy" />
                <Menu.Item position="right">
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${user?.userName}`} text="Moje Konto" icon='user' />
                            <Dropdown.Item onClick={logout} text='Wyloguj się' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                {/* <Menu.Item>
                    <Button positive content="Dodaj" />
                </Menu.Item> */}
            </Container>
        </Menu>
    )
})