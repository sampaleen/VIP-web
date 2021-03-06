import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AdminRoute } from '../Route';
import AnnouncementCreate from './AnnouncementCreate';
import AnnouncementEdit from './AnnouncementEdit';
import AnnouncementList from './AnnouncementList';
import AnnouncementPage from './AnnouncementPage';

import userStore from '../../stores/UserStore';

const Announcement = ( {match} ) => (
  <div>
    <Switch>
      <AdminRoute exact path={`${match.url}/creation`} user={userStore} component={ AnnouncementCreate }/>
      <Route exact path={`${match.url}/edit/:announcementId`} user={userStore} component={ AnnouncementEdit }/>
      <Route path={`${match.url}/:announcementId`} component={ AnnouncementPage }/>
      <Route exact path={match.url} component={ AnnouncementList }/>
    </Switch>
  </div>
)


export default Announcement;
