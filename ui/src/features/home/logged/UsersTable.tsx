import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import {  Table, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function UsersTable() {
    const { profileStore } = useStore();
    const { loadProfiles, profiles } = profileStore;

    useEffect(() => {
        if (profiles?.length === 0)
            loadProfiles()
    }, [profiles?.length, loadProfiles])
    return (
        <Table celled>
            <Table.Header>
                <Table.Row >
                    <Table.HeaderCell style={{ paddingLeft: '10%' }}>Użytkownik</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Punkty</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {profiles?.slice().sort((a,b) => b.points - a.points).filter(a => a.displayName !== 'admin').map(profile => {
                    return (
                        <Table.Row  key={profile.id}>
                            <Table.Cell style={{ paddingLeft: '10%' }}>
                                <Image src={profile?.image || '/assets/user.png'} avatar spaced='right' />
                                <NavLink to={`/profiles/${profile.userName}`}>
                                    {profile.displayName}
                                    </NavLink>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>
                                {profile.points}
                            </Table.Cell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    )
})
