import React from 'react';
import NavBar from './NavBar';
import TeamDashboard from '../../features/teams/dashboard/TeamDashboard';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import TeamDetails from '../../features/teams/details/TeamDetails';
import MatchesDashboard from '../../features/matches/dashboard/MatchesDashboard';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';

function App() {

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path={'/'} component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Switch>
              <Route exact path={'/teams'} component={TeamDashboard} />
              <Route exact path={'/matches'} component={MatchesDashboard} />
              <Route path={'/teams/:id'} component={TeamDetails} />
              <Route path='/errors' component={TestErrors} />
              <Route path='/server-error' component={ServerError} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </>
      )}
      />
    </>
  );
}

export default App;
