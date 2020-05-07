import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import PlayerProfile from './PlayerProfile';
import { UserContext } from "../providers/UserProvider";
import Welcome from './Welcome';
import PasswordReset from './PasswordReset';

export default function Application() {
  const user = useContext(UserContext);
debugger
    return (
      user ?
        <PlayerProfile />
      :
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/signUp' component={SignUp} />
        <Route exact path='/passwordReset' component={PasswordReset} />
      </Switch>
    )
};
