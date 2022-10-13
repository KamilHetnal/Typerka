import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import { Role } from '../../../app/models/Role'
import { useStore } from '../../../app/stores/store'
import AddToRole from '../form/AddToRole'
import RoleForm from '../form/RoleForm'

interface Props {
    role: Role
}

export default observer(function RoleListItem({ role }: Props) {
    const {roleStore, modalStore} = useStore();
    const {deleteRole} = roleStore;

    return (
        <Segment>
            <Grid>
                <Grid.Column width={8}>
                    <Button content={role.name} onClick={() => modalStore.openModal(<AddToRole roleName={role.name} />)} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button circular icon='edit' size='mini' primary 
                        onClick={() => modalStore.openModal(<RoleForm id={role.id} />)}
                    />
                    <Button circular icon='trash' size='mini' color='red' 
                        onClick={() => deleteRole(role.id)}
                    />
                </Grid.Column>
            </Grid>
        </Segment>
    )
})
