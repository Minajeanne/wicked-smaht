import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import PlayerProfile from './PlayerProfile';
import Welcome from './Welcome';
import PasswordReset from './PasswordReset';

export default function Application() {
  const user = null;
    return (
      user ?
        <PlayerProfile />
      :
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/signIn' component={SignIn} />
          <Route exact path='/signUp' component={SignUp} />
          <Route exact path='/passwordReset' component={PasswordReset} />
          <Route exact path='/playerProfile' component={PlayerProfile} />
        </Switch>
    )
};
