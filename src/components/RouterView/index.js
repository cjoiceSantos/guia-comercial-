
import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '../../pages/Home';
/*import Login from '../../pages/Login';
import AdminHome from '../AdminHome';
import Highlights from '../../pages/Highlights';
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
*/

export default function RouterView() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
     
    </Switch>
  );
}
