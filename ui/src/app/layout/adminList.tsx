import React from 'react'
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function AdminList() {
    const { userStore: { getRoles } } = useStore();

    const decodedRole = getRoles();

     if (decodedRole?.includes("admin") ) {
        return (
            <Menu.Item>
            <Dropdown pointing='top left' text="Panel Admina">
                <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to='/users' text="Użytkownicy"  />
                    <Dropdown.Item as={NavLink} to='/errors' text="Błędy" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
        )
    }
    return <></>
}

