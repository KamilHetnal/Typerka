import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Grid, Segment, Image } from 'semantic-ui-react'
import { Profile } from '../../../app/models/Profile'
import { useStore } from '../../../app/stores/store'
import UserRolesList from '../../roles/userRoles/UserRolesList'

interface Props {
    profile: Profile
}

export default observer(function ProfileListItem({ profile }: Props) {
    const { profileStore } = useStore();
    const { deleteProfile } = profileStore;

    const [detailsMode, setDetailsMode] = useState(false);

    return (
        <Segment>
            <Grid className="ui stackable two column grid" style={{ textAlign: 'center' }}>
                <Grid.Column width={8} className='column'>
                    <Grid>
                        <Grid.Column width={8}>
                            <Button floated='left' basic
                                icon={detailsMode ? 'angle up' : 'angle down'}
                                onClick={() => setDetailsMode(!detailsMode)} />
                            <Image src={profile?.image || '/assets/user.png'} avatar spaced='right' />
                            {profile.displayName}
                        </Grid.Column>
                        <Grid.Column width={8}>
                            {profile.email}
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={8} className='column'>
                    <Button.Group >
                        <Button color='blue' as={NavLink} to={`/profiles/${profile.userName}`}>
                            Podgląd
                        </Button>
                        <Button color='red' onClick={() => deleteProfile(profile.id)}>
                            Usuń
                        </Button>
                    </Button.Group>
                </Grid.Column>
                {detailsMode ?
                    (<UserRolesList profileId={profile.id} profileName={profile.userName} />)
                    : (<div></div>)}
            </Grid>
        </Segment>
    )
})
