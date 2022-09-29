import { observer } from 'mobx-react-lite';
import { Table } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import TeamListItem from './TeamListItem';



export default observer(function TeamList() {
    const { teamStore } = useStore()
    const { groupedTeams } = teamStore

    return (
        <>
            {groupedTeams.map(([group, teams]) => (
                <Table key={group} celled striped>
                    <Table.Header>
                        <Table.Row textAlign='center' >
                            <Table.HeaderCell width={8}> Grupa {group} </Table.HeaderCell>
                            <Table.HeaderCell >RM</Table.HeaderCell>
                            <Table.HeaderCell >W</Table.HeaderCell>
                            <Table.HeaderCell >R</Table.HeaderCell>
                            <Table.HeaderCell >P</Table.HeaderCell>
                            <Table.HeaderCell >B</Table.HeaderCell>
                            <Table.HeaderCell >Pkt</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body >
                        {teams.map((team) => (
                            <TeamListItem key={team.id} team={team} />
                        ))}
                    </Table.Body>
                </Table>

            ))}
        </>

    )
})
