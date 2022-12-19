import React from 'react'
import { Item, Segment } from 'semantic-ui-react'
import { Team } from '../../../app/models/Team'

interface Props {
    team: Team
}

export default function 
TeamInfo({ team }: Props) {
    return (
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={`/assets/flags/${team.name.toLocaleLowerCase()}.png`} />
                    <Item.Content>
                        <Item.Header >{team.name}</Item.Header>
                        <Item.Description>
                            {team.info}
                        </Item.Description>
                        <Item.Extra>Najlepszy rezultat: {team.bestResult}</Item.Extra>
                        <Item.Extra>{team.bestResultDates}</Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    )
}
