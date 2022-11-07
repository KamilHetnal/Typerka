import React, { useEffect, useState } from 'react'
import { Item, Table } from 'semantic-ui-react'
import { Match } from '../../../app/models/Match'
import MatchAdminBar from './MatchButton'
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom'
import { useStore } from '../../../app/stores/store'
import { Bet } from '../../../app/models/Bet'

interface Props {
    match: Match
}

export default function MatchListitem({ match }: Props) {
    const { betStore, userStore } = useStore();

    const { loadBet } = betStore;
    const { getLoggedUser } = userStore;

    const [matchBet, setMatchBet] = useState<Bet>(new Bet());

    const decodedUserId = getLoggedUser();

    const matchBetId = match.matchBets.filter(m => m?.match?.id !== match.id).find(u => u.appUserId === decodedUserId)?.id

    useEffect(() => {
        if (matchBetId) loadBet(matchBetId).then(matchBet => setMatchBet(new Bet(matchBet)))
    }, [matchBetId, loadBet])

    return (
        <Table unstackable>
            <Table.Header >
                <Table.Row>
                    <Table.HeaderCell colSpan='2'>
                        <Item as={NavLink} to={`/matches/${match.id}`}>
                            {format(match.matchDate, 'dd-MM: H:mm')}
                        </Item>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        <MatchAdminBar match={match} />
                    </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>
                        <Item>
                            <p>punkty: {matchBet.betPoints}</p>
                        </Item>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        <p>wynik</p>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        <p>typ</p>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Item.Group>
                            <Item>
                                <Item.Image 
                                size='mini' 
                                src={(match.homeTeam) ?`/assets/flags/${match.homeTeam?.name?.toLocaleLowerCase()}.png` : '/assets/logo.png'} 
                                />
                                <Item.Content verticalAlign='middle' content={match.homeTeam?.name} />
                            </Item>
                        </Item.Group>
                    </Table.Cell>
                    <Table.Cell width={4}>
                        {match.homeGoals}
                    </Table.Cell>
                    <Table.Cell width={4}>
                        {matchBet?.homeScore}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Item.Group>
                            <Item>
                                <Item.Image 
                                size='mini' 
                                src={(match.homeTeam) ? `/assets/flags/${match.awayTeam?.name?.toLocaleLowerCase()}.png` : '/assets/logo.png'} />
                                <Item.Content verticalAlign='middle' content={match.awayTeam?.name} />
                            </Item>
                        </Item.Group>
                    </Table.Cell>
                    <Table.Cell>
                        {match.awayGoals}
                    </Table.Cell>
                    <Table.Cell width={4}>
                        {matchBet?.awayScore}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}
