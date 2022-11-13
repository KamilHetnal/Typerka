import React from 'react'
import { Item } from 'semantic-ui-react'
import { Team } from '../../../app/models/Team'

interface Props {
    team: Team
}

export default function TeamInfo({team}: Props) {
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
}
