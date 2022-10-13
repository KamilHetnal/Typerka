import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import PanelHeaderTwo from '../../../app/common/panel/panelHeaderTwo';
import { useStore } from '../../../app/stores/store';
import ProfileListItem from './ProfileListItem';

export default observer(function ProfileList() {
    const { profileStore } = useStore();
    const { loadProfiles, profiles } = profileStore;

    useEffect(() => {
        if (profiles?.length === 0)
            loadProfiles()
    }, [profiles?.length, loadProfiles])

    return (
        <Container>
            <PanelHeaderTwo first='użytkownik' second='email'/>
            {profiles?.map(profile => (
                <ProfileListItem key={profile.id} profile={profile} />
            ))}
        </Container>
    )
})
