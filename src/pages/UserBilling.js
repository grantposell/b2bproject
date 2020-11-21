import React from 'react';
import {  Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./SignUp2.css"


const UserBilling = () => {
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
    );
};
export default UserBilling;