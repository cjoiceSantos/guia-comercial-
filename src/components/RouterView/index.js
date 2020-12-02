
import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import AdminHome from '../AdminHome';
import Highlights from '../../pages/Highlight';
import Promotions from '../../pages/Promotions';
import Search from '../../pages/Search';
import Register from '../../pages/Register/';
import Plans from '../../pages/Plans';
import { isLogged } from '../../services/auth';
import ChoiceProfile from '../../pages/ChoiceProfile';
import RegisterUser from '../../pages/RegisterUser';


const PrivateRoute = ({ component, ...rest }) => {
  if (!isLogged()) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} component={component} />
}


export default function RouterView() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/promocoes" component={Promotions} />
      <Route path="/choice-profile" component={ChoiceProfile} />
      <PrivateRoute path="/admin" component={AdminHome} />

      <Route path="/highlights" component={Highlights} />
      <Route path="/search" component={Search} />
      <Route path="/register" component={Register} />
      <Route path="/register-user" component={RegisterUser} />
      <Route path="/plans" component={Plans} />
    </Switch>
  );
}
