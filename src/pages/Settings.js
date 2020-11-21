// import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, } from 'react-mdl';
import UserInfo from './UserInfo';
import UserNotifications from './UserNotifications';
import UserBilling from './UserBilling';
import UserReports from './UserReports';
import UserReferral from './UserReferral';

const width = window.outerWidth
console.log(width)

class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategorgies() {
        if (this.state.activeTab === 0) {
            return (
                <UserInfo />
            )
        } else if (this.state.activeTab === 1) {
            return (
                <UserNotifications />
            )
        } else if (this.state.activeTab === 2) {
            return (
                <UserBilling />
            )
        } else if (this.state.activeTab === 3) {
            return (
                <UserReports />
            )
        } else if (this.state.activeTab === 4) {
            return (
                <UserReferral />
            )
        }
    }
    // if(width>"800px"){ return <Settings
    // }
    render() {
        return (
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Users</Tab>
                    <Tab>Notifications</Tab>
                    <Tab>Billing</Tab>
                    <Tab>Reports</Tab>
                    <Tab>Referral</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategorgies()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Settings;