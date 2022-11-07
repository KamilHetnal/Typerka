import { observer } from 'mobx-react-lite'
import React from 'react'
import { Container,  Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import RoleListItem from './RoleListItem';

export default observer(function RoleList() {
    const { roleStore } = useStore();
    const { groupedRoles } = roleStore;
    return (
        <Container>
            {groupedRoles.map(([group, roles]) => (
                <Segment.Group key={group}>
                    {roles.map(role => (
                        <RoleListItem key={role.id} role={role}/>
                    ))}
                </Segment.Group>
            ))}
        </Container>
    )
})
