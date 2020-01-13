import React from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import Home from '../components/Home'
import History from '../components/History'
import Events from '../components/Events'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/history' component={History} />
        <Route exact path='/events' component={Events} />

    </Switch>
)

export default withRouter(Routes)