
import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '../../pages/Home';
import Promotions from '../../pages/Promotions';
import Highlight from '../../pages/Highlight';
import Register from '../../pages/Register';
import RegisterUser from '../../pages/RegisterUser';
import Login from '../../pages/Login';
import ChoiceProfile from '../../pages/ChoiceProfile';
import Plans from '../../pages/Plans';
/*
import AdminHome from '../AdminHome';


import Search from '../../pages/Search';


import { isLogged } from '../../services/auth';




const PrivateRoute = ({ component, ...rest }) => {
  if (!isLogged()) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} component={component} />
}
*/

export default function RouterView() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/promocoes" component={Promotions}/> 
      <Route exact path="/destaques" component={Highlight}/> 
      <Route exact path="/login" component={Login}/> 
      <Route exact path="/choice-profile" component={ChoiceProfile}/> 
      <Route exact path="/register-user" component={RegisterUser}/>
      <Route exact path="/plans" component={Plans}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
  );
}
