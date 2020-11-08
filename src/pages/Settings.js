// import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { IonIcon } from '@ionic/react';
import { peopleCircleOutline } from 'ionicons/icons';

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
                <div className="projects-grid">
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Crystal Collector Game</CardTitle>
                            <CardText>
                                This is a Crystal Collector game The game was created with HTML5, CSS3, Bootstrap, and JavaScript. Click on the Crystals to get to the randomized value to win.
                    </CardText>
                            <CardActions border>
                                <a href="https://github.com/grantposell/week-4-game">
                                    <Button colored>GitHub</Button>
                                </a>
                                <a href="https://grantposell.github.io/week-4-game/">
                                    <Button colored>LiveDemo</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="project-card">
                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Sports Gif Generator</CardTitle>
                            <CardText>
                                This is a sports gif generator. This uses AJAX calls and RESTful APIs. Input a sport and click on it to see some of the best gifs that are trending.
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
                                Play a great game of Hangman: Cuisine Edition. Guess the right letters to know what is spelled. The words are common foods found in cultures all around the world.
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
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Bamazon Application</CardTitle>
                            <CardText>
                                This is a Node.js application that uses MySQL to create a command line Amazon-like environment.
                                Upon starting up the application, the user is prompted with what products they want.The user choses the product by selecting the id by using arrow keys.
                    </CardText>
                            <CardActions border>
                                <a href="https://github.com/grantposell/bamazon">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="project-card">
                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>LIRI</CardTitle>
                            <CardText>
                                This is a LIRI Node.js application.
                                LIRI stands for Language Interpretation and Recognition Interface.
                                This application allows users to search for information via server-side without an User Interface using native JavaScript over Node.js.
                    </CardText>
                            <CardActions border>
                                <a href="https://github.com/grantposell/liri-node-app">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
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
                    <div className="project-card">
                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Food Memory Game</CardTitle>
                            <CardText>
                                This is a Food Memory Game where you choose the food that you believe would be the next food to be chosen. This application is written in JavaScript in a React Framework. This application is majorly powered by randomized values using Math.floor.
                    </CardText>
                            <CardActions border>
                                <a href="https://github.com/grantposell/foodmemory">
                                    <Button colored>GitHub</Button></a>
                                <a href="https://modest-leavitt-ad3dd2.netlify.com/">
                                    <Button colored>LiveDemo</Button></a>
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
                    <div className="project-card">
                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>FareTrade</CardTitle>
                            <CardText>
                                This application was built by me and two others. This application allows for locals to buy, sell, and trade local produce. This application uses MVC, Express, Passport, MySQL, JavaScript, CSS3, and HTML5. The biggest difficulty was dictating buyers and sellers.
                    </CardText>
                            <CardActions border>
                                <a href="https://github.com/rmesser87/FareTrade">
                                    <Button colored>GitHub</Button></a>
                                <a href="https://evening-harbor-15716.herokuapp.com/">
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
                    <div className="project-card">
                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Fēnix Power</CardTitle>
                            <CardText>
                                Building a web application for Fēnix Power Startup. This application is currently being built with HTML, CSS, and WordPress. Overhauled the website in a weekend from original state.
                    </CardText>
                            <CardActions border>
                                <a href="https://fenix.systems/">
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
                    <Tab><IonIcon size={600} icon={peopleCircleOutline} />
                    </Tab>
                    <Tab>Notifications</Tab>
                    <Tab>React</Tab>
                    <Tab>FS</Tab>
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