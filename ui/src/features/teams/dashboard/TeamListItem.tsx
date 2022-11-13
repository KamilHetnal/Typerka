import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Team } from '../../../app/models/Team'
import TeamNavName from '../details/TeamNavName'

interface Props {
    team: Team
    index: number
}

export default function TeamListItem({ team, index }: Props) {
    return (
        <>
            {(index > 2) ?
                <>
                    <Grid.Row
                        only='computer'
                        textAlign='center'
                        style={{
                            backgroundColor: 'white',
                            borderBottomRightRadius: 20,
                            borderBottomLeftRadius: 20
                        }} >
                        <ComputerItem team={team} index={index} />
                    </Grid.Row>
                    <Grid.Row
                        only='mobile tablet'
                        textAlign='center'
                        style={{
                            backgroundColor: 'white',
                            borderBottomRightRadius: 20,
                            borderBottomLeftRadius: 20
                        }} >
                        <MobileItem team={team} index={index} />
                    </Grid.Row>
                </>
                :
                <>
                    <Grid.Row
                        only='computer'
                        textAlign='center'
                        style={{
                            backgroundColor: 'white'
                        }}
                    >
                        <ComputerItem team={team} index={index} />
                    </Grid.Row>
                    <Grid.Row
                        only='mobile tablet'
                        textAlign='center'
                        style={{
                            backgroundColor: 'white'
                        }}
                    >
                        <MobileItem team={team} index={index} />
                    </Grid.Row>
                </>
            }
        </>
    )
}
export function ComputerItem({ team, index }: Props) {
    return (
        <>
            <Grid.Column width={1} >
                {index + 1}.
            </Grid.Column>
            <Grid.Column width={4}>
                <TeamNavName team={team} />
            </Grid.Column>
            <Grid.Column width={2} >{team.matchesPlayed}</Grid.Column>
            <Grid.Column width={2} >{team.wins}</Grid.Column>
            <Grid.Column width={2} >{team.losses}</Grid.Column>
            <Grid.Column width={2} >{team.draws}</Grid.Column>
            <Grid.Column width={2}>{team.goalsScored} : {team.goalsConceded}</Grid.Column>
            <Grid.Column width={1}>{team.points}</Grid.Column>
        </>
    )
}
export function MobileItem({ team }: Props) {
    return (
        <>
            <Grid.Column width={8}>
                <TeamNavName team={team} />
            </Grid.Column>
            <Grid.Column width={4}>{team.goalsScored} : {team.goalsConceded}</Grid.Column>
            <Grid.Column width={4}>{team.points}</Grid.Column>
        </>
    )
}
