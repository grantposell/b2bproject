import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./SignUp2.css"


const UserBilling = () => {
    return (
        <div style={{ justifyContent: 'space-evenly', display: 'flex' }} className="projects-grid">
            <div className="project-card">
                {/* Project 1 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Nimbus</CardTitle>
                    <CardText>
                        <li>
                            <ul></ul>
                        </li>
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
            <div className="project-card">
                {/* Project 2 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Stratus</CardTitle>
                    <CardText>
                        <li>
                            <ul></ul>
                        </li>
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/grantposell/sports-gif-generator">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://grantposell.github.io/sports-gif-generator">
                            <Button colored>LiveDemo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            <div className="project-card">
                {/* Project 3 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Hangman: Cuisine Edition</CardTitle>
                    <CardText>
                        <li>
                            <ul></ul>
                        </li>
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/grantposell/Hangman-Game">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://grantposell.github.io/Hangman-Game/">
                            <Button colored>LiveDemo</Button>
                        </a>
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