import React from 'react';
import {  Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./SignUp2.css"


const UserReferral = () => {
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
export default UserReferral;