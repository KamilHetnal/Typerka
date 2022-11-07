import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

interface Props {
    roleName: string
    profileName: string
}


export default observer(function UserRolesListItem({ roleName, profileName }: Props) {
    const {roleStore: {deleteFromRole}} = useStore();

    function cancelRole(roleName: string, userName: string) {
        deleteFromRole(roleName, userName)
    }
    return (
        <Segment size='large'>
            {roleName}
            <Button 
            icon={'cancel'} size='mini' color='red' inverted 
            style={{ marginLeft: 10 }} 
            onClick={() => cancelRole(roleName, profileName)}
            />
        </Segment>
    )
})
