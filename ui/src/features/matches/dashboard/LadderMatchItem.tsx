import React from 'react'
import { Segment, Table } from 'semantic-ui-react'
import { Match } from '../../../app/models/Match'

interface Props {
    match: Match
    home: string
    away: string
    title: string
}

export default function LadderMatchItem({ match, home, away, title }: Props) {
    return (
        <Segment>
            <Table color='blue' unstackable>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell colSpan={2}>
                            {title}
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{match?.homeTeam?.name || home}</Table.Cell>
                        <Table.Cell>{match?.homeGoals}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>{match?.awayTeam?.name || away}</Table.Cell>
                        <Table.Cell>{match?.awayGoals}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Segment>
    )
}
