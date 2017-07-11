import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AdvisorRoute, PrivateRoute } from '../Route';
import ASUTeamFormComponent from './Application/ASUTeamFormComponent';
import ProjectPage from './ProjectPage';
import ProjectList from './ProjectList';

import userStore from '../../stores/UserStore';

const Projects = ( {match} ) => (
  <div>
    <Switch>
      {/*<AdvisorRoute exact path={`${match.url}/application`} user={userStore} component={ ASUTeamFormComponent }/>*/}
      <PrivateRoute exact path={`${match.url}/application`} authed={userStore.authed} component={ ASUTeamFormComponent }/>
      <Route path={`${match.url}/:projectId`} component={ ProjectPage }/>
      <Route exact path={match.url} component={ ProjectList }/>
    </Switch>
  </div>
)

export default Projects;