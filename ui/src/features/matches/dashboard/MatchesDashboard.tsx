import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store'
import MatchList from './MatchList';

export default observer(function MatchesDashboard() {
  const {matchStore} = useStore();
  const {loadMatches, loadingInitial} = matchStore;

  useEffect(() => {
      loadMatches()
  }, [loadMatches])

  if (loadingInitial) return <LoadingComponent content='Zbieram dane' />

  return (
    <Container text style={{ marginTop: '7em' }}>
      <MatchList />
    </Container>
  )
})
