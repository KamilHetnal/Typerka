import React from 'react'
import { Item, Table } from 'semantic-ui-react'
import { Match } from '../../../app/models/Match'
import MatchAdminBar from './MatchAdminBar'
import {format} from 'date-fns'
import { NavLink } from 'react-router-dom'

interface Props {
    match: Match
}

export default function MatchListitem({ match }: Props) {
    return (
        <Table unstackable>
            <Table.Header >
                <Table.Row>
                    <Table.HeaderCell>
                        <Item as={NavLink} to={`/matches/${match.id}`}>
                            {format(match.matchDate, 'dd-MM: H:mm')}
                        </Item>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        <MatchAdminBar match={match} />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Item.Group>
                            <Item>
                                <Item.Image size='mini' src={`/assets/flags/${match.homeTeam?.name.toLocaleLowerCase()}.png`} />
                                <Item.Content verticalAlign='middle' content={match.homeTeam?.name} />
                            </Item>
                        </Item.Group>
                    </Table.Cell>
                    <Table.Cell width={4}>
                        {match.homeGoals}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Item.Group>
                            <Item>
                                <Item.Image size='mini' src={`/assets/flags/${match.awayTeam?.name.toLocaleLowerCase()}.png`} />
                                <Item.Content verticalAlign='middle' content={match.awayTeam?.name} />
                            </Item>
                        </Item.Group>
                    </Table.Cell>
                    <Table.Cell>
                        {match.awayGoals}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}
