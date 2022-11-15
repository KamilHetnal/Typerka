import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Grid, Segment, Image, Header, Container } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import MatchDetailsHeader from './MatchDetailsHeader';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import MatchDetailsBets from './MatchDetailsBets';
import { format, parseISO } from 'date-fns';
import { Bet } from '../../../app/models/Bet';
import MatchButton from '../dashboard/MatchButton';

export default observer(function MatchDetails() {
    const { matchStore, betStore, userStore } = useStore();
    const { match, loadMatch, loadingInitial } = matchStore;
    const { loadBet } = betStore;
    const { getLoggedUser, getRoles } = userStore;
    const { id } = useParams<{ id: string }>();

    const [matchBet, setMatchBet] = useState<Bet>(new Bet());

    useEffect(() => {
        if (id) loadMatch(id);
    }, [id, loadMatch])

    const decodedUserId = getLoggedUser();
    const decodedRole = getRoles();

    const matchBetId = match?.matchBets.filter(m => m?.match?.id !== match.id).find(u => u.appUserId === decodedUserId)?.id
    useEffect(() => {
        if (matchBetId)
        loadBet(matchBetId).then(matchBet => setMatchBet(new Bet(matchBet)))
    }, [matchBetId, loadBet, setMatchBet, matchBet])

    const currentDate = Date.now()

    if (loadingInitial || !match) return <LoadingComponent />;
    return (
        <Container text>
            <Segment.Group>
                <MatchDetailsHeader matchDate={match.matchDate} />
                <Segment placeholder color='blue' >
                    <Grid style={{ fontSize: '20px' }} columns={3} >
                        <Grid.Row >
                            <Grid.Column width={5} as={NavLink} to={`/teams/${match?.homeTeam?.id}`}>
                                <Header textAlign='center' content={match?.homeTeam?.name} />
                                <Image size='small' centered src={`/assets/flags/${match?.homeTeam?.name.toLocaleLowerCase()}.png`} />
                            </Grid.Column>
                            <Grid.Column width={6} verticalAlign='middle'>
                                <Grid>
                                    <Grid.Row >
                                        <Grid.Column width={7} textAlign='center'>
                                            {match?.homeGoals}
                                        </Grid.Column>
                                        <Grid.Column width={2} textAlign='center'>
                                            -
                                        </Grid.Column>
                                        <Grid.Column width={7} textAlign='center'>
                                            {match?.awayGoals}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column width={5} as={NavLink} to={`/teams/${match?.homeTeam?.id}`}>
                                <Header textAlign='center' content={match?.awayTeam?.name} />
                                <Image size='small' centered src={`/assets/flags/${match?.awayTeam?.name.toLocaleLowerCase()}.png`} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                {(match.matchDate instanceof Date) ?
                    <>
                        <Segment style={{ color: 'white' }}>
                            {format(match.matchDate, 'dd-MM-yyyy: HH:mm')}
                        </Segment>
                        {currentDate >= match.matchDate.getTime() || decodedRole?.includes("admin") ?
                            < MatchDetailsBets bets={match.matchBets} />
                            :
                            <MatchButton matchId={match.id} matchBetId={matchBetId} />
                        }
                    </>
                    :
                    <>
                        <Segment style={{ color: 'white' }}>
                            {format(parseISO(match.matchDate), 'dd-MM-yyyy: HH:mm')}
                        </Segment>
                        {currentDate <= match.matchDate || decodedRole?.includes("admin") ?
                            < MatchDetailsBets bets={match.matchBets} />
                            :
                            <MatchButton matchId={match.id} matchBetId={matchBetId} />
                        }
                    </>}
            </Segment.Group>
        </Container>
    )
})
