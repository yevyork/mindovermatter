import React from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import Home from '../components/Home'
import History from '../components/History'
import Events from '../components/Events'
import Curate from '../components/Curate'
import Merch from '../components/Merch'
import Contact from '../components/Contact'
import Console from '../console-components/Console'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/history' component={History} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/curate' component={Curate} />
        <Route exact path='/merch' component={Merch} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/console' component={Console} />

    </Switch>
)

export default withRouter(Routes)