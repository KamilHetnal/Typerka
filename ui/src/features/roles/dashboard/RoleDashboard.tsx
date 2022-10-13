import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import RoleList from './RoleList'
import RoleForm from '../form/RoleForm';

export default observer(function RoleDashboard() {
    const { roleStore, modalStore } = useStore();
    const { loadRoles, roleRegistry } = roleStore;

    useEffect(() => {
        if (roleRegistry.size <= 1) {
            loadRoles();
        };
    }, [roleRegistry.size, loadRoles])
    return (
        <Segment>
            <Button className='ui fluid button' positive size='large'
                onClick={() => modalStore.openModal(<RoleForm />)}
            >
                dodaj rolę
                </Button>
            <Segment.Group>
                <RoleList />
            </Segment.Group>
        </Segment>
    )
})
