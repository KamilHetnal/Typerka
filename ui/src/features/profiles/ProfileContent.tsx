import { observer } from 'mobx-react-lite';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/Profile';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent({profile}: Props) {

    const panes = [
        {menuItem: 'About', render: () => <Tab.Pane>About</Tab.Pane> },
        {menuItem: 'Zdjęcia', render: () => <ProfilePhotos profile={profile}/> },
        {menuItem: 'Events', render: () => <Tab.Pane>Events</Tab.Pane>},
        {menuItem: 'Followers', render: () => <Tab.Pane>Followers</Tab.Pane>},
        {menuItem: 'Following', render: () => <Tab.Pane>Following</Tab.Pane>},
    ];

    return (
        <Tab 
            menu={{fluid: true, vertical: false}}
            menuPosition='right'
            panes={panes}
        />
    )
})
