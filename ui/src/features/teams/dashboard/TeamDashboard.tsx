import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import TeamList from './TeamList';

export default observer(function TeamDashboard() {
    const { teamStore } = useStore();
    const { loadTeams, loadingInitial } = teamStore;

    useEffect(() => {
        loadTeams()
    }, [loadTeams])

    if (loadingInitial) return <LoadingComponent content='Zbieram dane' />

    return (
        <Container text style={{ marginTop: '7em' }}>
            <TeamList />
        </Container>
    )
})
