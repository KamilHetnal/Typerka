import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Container, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import UserRolesListItem from './UserRolesListItem';

interface Props {
    profileId: string;
    profileName: string
}

export default observer(function UserRolesList({ profileId, profileName }: Props) {
    const { roleStore } = useStore();
    const { loadUserRoles, userRoles } = roleStore;

    useEffect(() => {
        if (userRoles.length === 0)
            loadUserRoles()
    }, [userRoles.length, loadUserRoles])

    return (
        <Segment.Group horizontal style={{ marginLeft: 15 }}>
            {userRoles.filter(ur => ur.userId === profileId).map((userRole) => (
                <UserRolesListItem key={userRole.roleId} roleName={userRole.roleId} profileName={profileName} />
            ))}
        </Segment.Group>
    )
})
