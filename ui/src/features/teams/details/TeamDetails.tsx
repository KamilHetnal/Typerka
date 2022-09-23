import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Item } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'


export default observer(function TeamDetails() {
    const { teamStore } = useStore();
    const { team, loadTeam, loadingInitial } = teamStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadTeam(id)
    }, [id, loadTeam])


    if (loadingInitial || !team) return <LoadingComponent />

    return (
        <Item.Group>
            <Item>
                <Item.Image size='small' src={`/assets/flags/${team.name.toLocaleLowerCase()}.png`} />
                <Item.Content verticalAlign='middle'>
                    <Item.Header content={team.name} />
                </Item.Content>
            </Item>
        </Item.Group>
    )
})
