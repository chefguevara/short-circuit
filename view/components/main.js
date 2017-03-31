import React from 'react';
//import {ipcRenderer} from 'electron';

import Dashboard from './dashboard/dashboard';
import Login from './login';



export default React.createClass({
    getInitialState() {
        return {
            user: { name: 'anonymous' }
        }
    },
    doLogin(user) {
        const newUser = {
            name: user.name
        };
        this.setState(() => ({user: newUser}));
    },

    render() {
        let children = (this.state.user.name !== 'anonymous') ? <Dashboard {...this.state}/> : <Login doLogin={this.doLogin} />;
        return (
            <div>
                {children}
            </div>
        );
    }
});