import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./SignUp2.css"


const UserReports = () => {
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
    );
};
export default UserReports;