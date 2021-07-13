import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Exc404 from '../pages/Exc404';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/*" component={Exc404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
