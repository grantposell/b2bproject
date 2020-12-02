import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, List, ListItem } from 'react-mdl';
import "./SignUp2.css"


const UserBilling = () => {
    return (
        <div style={{ justifyContent: 'space-evenly', display: 'flex' }} className="projects-grid">
            <div className="project-card">
                {/* Project 1 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/assets/images/cirrus.jpg) center / cover' }}>Nimbus</CardTitle>
                    <CardText>
                        <List>
                            <ListItem>$10 User/Month</ListItem>
                            <ListItem>Unlimited Free Viewers</ListItem>
                            <ListItem>Unlimited Products &amp; Listings</ListItem>
                        </List>
                    </CardText>
                    <CardActions border>
                        <a href="/">
                            <Button raised colored style={{ float: 'right' }}>Select</Button></a>
                    </CardActions>
                </Card>
            </div>
            <div className="project-card">
                {/* Project 2 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/assets/images/nimbus.jpg) center / cover' }}>Cirrus</CardTitle>
                    <CardText>
                        <List>
                            <ListItem>$15 User/Month</ListItem>
                            <ListItem>Unlimited Free Viewers</ListItem>
                            <ListItem>Unlimited Products &amp; Listings</ListItem>
                            <ListItem>User Report Dashboard</ListItem>
                        </List>
                    </CardText>
                    <CardActions border>
                        <a href="/">
                            <Button raised colored style={{ float: 'right' }}>Select</Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
            <div className="project-card">
                {/* Project 3 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/assets/images/stratus.jpg) center / cover' }}>Stratus</CardTitle>
                    <CardText>
                    <List>
                            <ListItem>$20 User/Month</ListItem>
                            <ListItem>Unlimited Free Viewers</ListItem>
                            <ListItem>Unlimited Products &amp; Listings</ListItem>
                            <ListItem>User Report Dashboard</ListItem>
                            <ListItem>REST API Access</ListItem>
                        </List>
                    </CardText>
                    <CardActions border>
                        <a href="/">
                            <Button raised colored style={{ float: 'right' }}>Select</Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};
export default UserBilling;