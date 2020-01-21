import React from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import Home from '../components/Home'
import History from '../components/History'
import Events from '../components/Events'
import Curate from '../components/Curate'
import Merch from '../components/Merch'
import Contact from '../components/Contact'
import Console from '../console-components/Console'
import ContactMessages from '../console-components/ContactMessages'
import MerchConsole from '../console-components/MerchConsole'
import AddMerch from '../console-components/AddMerch'
import EditMerch from '../console-components/EditMerch'
import EventConsole from '../console-components/EventConsole'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/history' component={History} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/curate' component={Curate} />
        <Route exact path='/merch' component={Merch} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/console' component={Console} />
        <Route exact path='/contactmsgs' component={ContactMessages} />
        <Route exact path='/console' component={Console} />
        <Route exact path='/merchconsole' component={MerchConsole} />
        <Route exact path='/addmerch' component={AddMerch} />
        <Route exact path='/editmerch/:id' component={EditMerch} />
        <Route exact path='/eventconsole' component={EventConsole} />

    </Switch>
)

export default withRouter(Routes)