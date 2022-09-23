import React from 'react';
import NavBar from './NavBar';
import TeamDashboard from '../../features/teams/dashboard/TeamDashboard';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import TeamDetails from '../../features/teams/details/TeamDetails';

function App() {

  return (
    <>
      <Route exact path={'/'} component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Route exact path={'/teams'} component={TeamDashboard} />
            <Route path={'/teams/:id'} component={TeamDetails} />
          </Container>
        </>
      )}
      />
    </>
  );
}

export default App;
