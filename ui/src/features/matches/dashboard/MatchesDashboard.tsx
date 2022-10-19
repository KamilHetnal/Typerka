import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store'
import MatchList from './MatchList';

export default observer(function MatchesDashboard() {
  const {matchStore} = useStore();
  const {loadMatches, matchRegistry, loadingInitial} = matchStore;

  useEffect(() => {
    if (matchRegistry.size <= 0) loadMatches()
  }, [matchRegistry.size, loadMatches])

  if (loadingInitial) return <LoadingComponent content='Zbieram dane' />

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Button positive size='huge' floated='right' style={{ marginBottom: '1em' }} as={NavLink} to={'/createMatch'}>
        dodaj mecz
        </Button>
      <MatchList />
    </Container>
  )
})
