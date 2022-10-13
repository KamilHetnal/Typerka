import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Grid, Menu } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

interface Props {
    roleName: string
}

export default function AddToRole({ roleName }: Props) {
    const { roleStore, modalStore, profileStore } = useStore();
    const { profiles, loadProfiles } = profileStore;

    useEffect(() => {
        if (profiles?.length === 0)
        loadProfiles();
    }, [loadProfiles, profiles])
    const [profileName, setProfileId] = useState('');
    function addToRole() {
        roleStore.addToRole(roleName, profileName)
        modalStore.closeModal()
    }

    return (
        <>
        <div>{roleName}</div>
        <Grid>
            <Grid.Column width={12}>
                <Menu.Item name='Pracownik'>
                    <Dropdown pointing='top left' text='Pracownicy'>
                        <Dropdown.Menu>
                            {profiles?.map(profile => (
                                <Dropdown.Item key={profile.userName} text={profile.displayName} onClick={() => setProfileId(profile.userName)} />
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Grid.Column>
            <Grid.Column width={4}>
                <Button positive onClick={() => addToRole()}>Dodaj</Button>
            </Grid.Column>
        </Grid>
        </>
    )
}
