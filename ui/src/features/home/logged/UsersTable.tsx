import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Image, Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function UsersTable() {
    const { profileStore } = useStore();
    const { loadProfiles, profiles } = profileStore;

    useEffect(() => {
        if (profiles?.length === 0)
            loadProfiles()
    }, [profiles?.length, loadProfiles])

    const headerStyle = {
        marginTop: '1rem',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    }

    const cellStyle = {
        backgroundColor: 'white',
        borderBottom: '1px solid lightgrey' 
    }
    return (
        <Grid columns={2} >
            <Grid.Row color='blue' style={headerStyle}>
                <Grid.Column width={8}>
                    <div>Użytkownik</div>
                </Grid.Column>

                <Grid.Column width={8} textAlign='center'>
                    <div >Punkty</div>
                </Grid.Column>
            </Grid.Row>
            {profiles?.slice().sort((a, b) => b.points - a.points).filter(a => a.displayName.toLowerCase() !== 'admin').map(profile => {
                return (
                    <Grid.Row key={profile.id} style={cellStyle}>
                        <Grid.Column width={8}>
                            <Image src={profile?.image || '/assets/user.png'} avatar spaced='right' />
                            <NavLink to={`/profiles/${profile.userName}`}>
                                {profile.displayName}
                            </NavLink>
                        </Grid.Column>
                        <Grid.Column width={8} textAlign='center'>
                            {profile.points}
                        </Grid.Column>
                    </Grid.Row>
                );
            })}
        </Grid>
    )
})
