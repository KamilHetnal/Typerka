import React from "react";
import { NavLink } from "react-router-dom";
import {  Container, Menu } from "semantic-ui-react";

export  default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container >
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/> Bet at Bed
                </Menu.Item>
                <Menu.Item as={NavLink} to='/matches' name="Mecze" />
                <Menu.Item as={NavLink} to='/teams' name="Reprezentacje" />
                <Menu.Item as={NavLink} to='/groups' name="Grupy" />
                <Menu.Item as={NavLink} to='/errors' name="Błędy" />
                {/* <Menu.Item>
                    <Button positive content="Dodaj" />
                </Menu.Item> */}
            </Container>
        </Menu>
    )
}