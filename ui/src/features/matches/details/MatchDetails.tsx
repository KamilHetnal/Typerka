import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Grid, Segment, Image,Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import MatchDetailsHeader from './MatchDetailsHeader';
import LoadingComponent from '../../../app/layout/LoadingComponent';

export default observer(function MatchDetails() {
    const { matchStore } = useStore();
    const { match, loadMatch, loadingInitial } = matchStore;
    const { id } = useParams<{ id: string }>();

    
    useEffect(() => {
        if (id) loadMatch(id);
    }, [id, loadMatch])
    
    if (loadingInitial || !match) return <LoadingComponent />;
    return (
        <Segment.Group>
                <MatchDetailsHeader match={match} />
            <Segment placeholder color='blue' >
                <Grid style={{fontSize: '20px'}} >
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
        </Segment.Group>
    )
})
