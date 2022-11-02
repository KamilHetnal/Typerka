import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Table } from 'semantic-ui-react'
import { Team } from '../../../app/models/Team'

interface Props {
    team: Team
}

export default function TeamListItem({ team }: Props) {
    return (
        <Table.Row textAlign='center'>
            <Table.Cell  >
                <Item.Group as={Link} to={`/teams/${team.id}`}>
                    <Item>
                        <Item.Image size='mini' src={`/assets/flags/${team.name?.toLocaleLowerCase()}.png`} />
                        <Item.Content verticalAlign='middle' content={team.name} />
                    </Item>
                </Item.Group>
            </Table.Cell>
            <Table.Cell>{team.matchesPlayed}</Table.Cell>
            <Table.Cell>{team.wins}</Table.Cell>
            <Table.Cell>{team.losses}</Table.Cell>
            <Table.Cell>{team.draws}</Table.Cell>
            <Table.Cell>{team.goalsScored} : {team.goalsConceded}</Table.Cell>
            <Table.Cell>{team.points}</Table.Cell>
        </Table.Row>
    )
}
