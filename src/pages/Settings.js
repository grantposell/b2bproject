// import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { IonCard, IonList, IonItem, IonLabel, IonToggle } from '@ionic/react';
import UserInfo from './UserInfo';
// import { IonIcon } from '@ionic/react';
// import { peopleCircleOutline } from 'ionicons/icons';

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
                <div className="projects-grid" style={{display: 'flex', justifyContent:'space-between'}}>
                    <div className="project-card" style={{ justifyContent: "center" }}>
                        <IonCard style={{ width: "300px" }}>
                            <IonList>
                                <h1 style={{textAlign: 'center',}}>Messages</h1>
                                <IonItem>
                                    <IonLabel>New Messages</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>New Connections</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>New Suggestions</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                            </IonList>
                        </IonCard>
                    </div>
                    <div className="project-card" style={{ justifyContent: "center" }}>
                        <IonCard style={{ width: "300px" }}>
                            <IonList>
                                <h1 style={{textAlign: 'center',}}>Orders</h1>
                                <IonItem>
                                    <IonLabel>Order Received</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Order Processed</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Order in Route</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Order Delivered</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>New Listings</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                            </IonList>
                        </IonCard>
                    </div>
                    <div className="project-card" style={{ justifyContent: "center" }}>
                        <IonCard style={{ width: "300px" }}>
                            <IonList>
                                <h1 style={{textAlign: 'center',}}>Updates</h1>
                                <IonItem>
                                    <IonLabel>New App Updates</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>New Newsletters</IonLabel>
                                    <IonToggle value="sausage" />
                                </IonItem>
                            </IonList>
                        </IonCard>
                    </div>
            </div>

            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Stalks</CardTitle>
                            <CardText>
                                This is a Stock Market Trading game. We developed the social aspect of our application by coding the backend working with React, JavaScript, Node.js, MySQL, and MongoDB. The features that we created were the ability to find, select, add friends, and talk more over a platform forum.
                    </CardText>
                            <CardActions border>
                                <a href="https://github.com/lmcneel/stalks">
                                    <Button colored>GitHub</Button></a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Take A Hike</CardTitle>
                            <CardText>
                                This a hiking application that includes the weather for the given location that a consumer would be looking to go to. Our team included 4 members. This application includes HTML5, CSS3, Bootstrap, JavaScript, jQuery, AJAX calls, Hiking APIs, Google Firebase, and Google Maps API.
                    </CardText>
                            <CardActions border>
                                <a href="https://github.com/grantposell/waag">
                                    <Button colored>GitHub</Button></a>
                                <a href="https://grantposell.github.io/waag/">
                                    <Button colored>LiveDemo</Button></a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div className="projects-grid">
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>ChargeShare</CardTitle>
                            <CardText>
                                Building a web application for my Electric Vehicle Charging Station Network Startup. This application is currently being built with HTML, CSS, JavaScript, and WordPress; databases to be added to bring user profiles.
                    </CardText>
                            <CardActions border>
                                <a href="https://www.chargesharenetwork.com/">
                                    <Button colored>LiveDemo</Button></a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
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