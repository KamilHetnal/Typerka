import React, { useEffect, useState } from 'react'
import { Grid, Item, } from 'semantic-ui-react'
import { Match } from '../../../app/models/Match'
import MatchAdminBar from './MatchButton'
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom'
import { useStore } from '../../../app/stores/store'
import { Bet } from '../../../app/models/Bet'
import TeamNavName from '../../teams/details/TeamNavName'

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
        <Grid columns={2}>
            <Grid.Row >
                <Grid.Column width={8}>
                    <Item as={NavLink} to={`/matches/${match.id}`}>
                        {format(match.matchDate, 'dd-MM: H:mm')}
                    </Item>
                </Grid.Column>
                <Grid.Column width={8}>
                    <MatchAdminBar match={match} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Item>
                        <p>punkty: {matchBet.betPoints}</p>
                    </Item>
                </Grid.Column>
                <Grid.Column width={4}>
                    <p>wynik</p>
                </Grid.Column>
                <Grid.Column width={4}>
                    <p>typ</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <TeamNavName team={match.homeTeam} />
                </Grid.Column>
                <Grid.Column width={4}>
                    {match.homeGoals}
                </Grid.Column>
                <Grid.Column width={4}>
                    {matchBet?.homeScore}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <TeamNavName team={match.awayTeam} />
                </Grid.Column>
                <Grid.Column width={4}>
                    {match.awayGoals}
                </Grid.Column>
                <Grid.Column width={4}>
                    {matchBet?.awayScore}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
