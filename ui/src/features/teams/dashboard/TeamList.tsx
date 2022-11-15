import { observer } from 'mobx-react-lite';
import { Container, Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import TeamListItem from './TeamListItem';



export default observer(function TeamList() {
    const { teamStore } = useStore()
    const { groupedTeams } = teamStore

    return (
        <Container text>
            {groupedTeams.map(([group, teams]) => (
                <Grid key={group} columns={7} divided>
                    <Grid.Row only='computer'
                        textAlign='center'
                        color='blue'
                        style={{
                            marginTop: '15px',
                            borderTopRightRadius: 5,
                            borderTopLeftRadius: 5
                        }}
                    >
                        <Grid.Column width={5} > Grupa {group}</Grid.Column>
                        <Grid.Column width={2} >RM</Grid.Column>
                        <Grid.Column width={2} >W</Grid.Column>
                        <Grid.Column width={2} >R</Grid.Column>
                        <Grid.Column width={2} >P</Grid.Column>
                        <Grid.Column width={2} >B</Grid.Column>
                        <Grid.Column width={1} >Pkt</Grid.Column>
                    </Grid.Row>
                    <Grid.Row only='mobile tablet'
                        textAlign='center'
                        color='blue'
                        style={{
                            marginTop: '15px',
                            borderTopRightRadius: 5,
                            borderTopLeftRadius: 5
                        }}
                    >
                        <Grid.Column width={8} > Grupa {group}</Grid.Column>
                        <Grid.Column width={4} >B</Grid.Column>
                        <Grid.Column width={4} >Pkt</Grid.Column>
                    </Grid.Row>

                    {teams.map((team, index) => (
                        <TeamListItem key={team.id} team={team} index={index} />
                    ))}
                </Grid>
            ))}
        </Container>

    )
})
