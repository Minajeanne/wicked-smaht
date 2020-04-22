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
import PasswordReset from './PasswordReset';

export default function Application() {
  const user = null;

  return (
    user ?
      <PlayerProfile />
    :
      <Router>
        <SignUp path='signUp' />
        <SignIn path='signIn' />
        <PasswordReset path='passwordReset' />
      </Router>
  )
};
