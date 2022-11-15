import { observer } from 'mobx-react-lite';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/Profile';
import ProfileBets from './ProfileBets';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent({profile}: Props) {

    const panes = [
        {menuItem: 'O mnie', render: () => <Tab.Pane>O mnie</Tab.Pane> },
        {menuItem: 'Zdjęcia', render: () => <ProfilePhotos profile={profile}/> },
        {menuItem: 'Obstawienia', render: () => <ProfileBets profile={profile} />}
    ];

    return (
        <Tab 
            menu={{fluid: true, vertical: false}}
            menuPosition='right'
            panes={panes}
        />
    )
})
