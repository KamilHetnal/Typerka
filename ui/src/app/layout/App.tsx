import React, { useEffect } from 'react';
import NavBar from './NavBar';
import TeamDashboard from '../../features/teams/dashboard/TeamDashboard';
import { Container } from 'semantic-ui-react';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import TeamDetails from '../../features/teams/details/TeamDetails';
import MatchesDashboard from '../../features/matches/dashboard/MatchesDashboard';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import LoginForm from '../../features/users/LoginForm';
import { useStore } from '../stores/store';
import ModalContainer from '../common/modals/modalContainer';
import ProfileDashboard from '../../features/profiles/dashboard/ProfileDashboard';
import MatchForm from '../../features/matches/form/MatchForm';
import MatchDetails from '../../features/matches/details/MatchDetails';
import ProfilePage from '../../features/profiles/ProfilePage';

function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    }else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  //if (!commonStore.appLoaded) return <LoadingComponent content='Wczytuję...' />

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <ModalContainer />
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/teams'} component={TeamDashboard} />

          <Route exact path={'/matches'} component={MatchesDashboard} />
          <Route exact path='/matches/:id' component={MatchDetails} />
          <Route key={location.key} path={['/createMatch', '/manage_match/:id']} component={MatchForm} />

          <Route exact path={'/login'} component={LoginForm} />
          <Route exact path={'/users'} component={ProfileDashboard} />
          <Route path={'/teams/:id'} component={TeamDetails} />
          <Route path='/profiles/:userName' component={ProfilePage} />
          <Route path='/errors' component={TestErrors} />
          <Route path='/server-error' component={ServerError} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
