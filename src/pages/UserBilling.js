import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import "./SignUp2.css"


const UserBilling = () => {
    return (
        <div style={{ justifyContent: 'space-evenly', display: 'flex' }} className="projects-grid">
            <div className="project-card">
                {/* Project 1 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/assets/images/cirrus.jpg) center / cover'}}>Nimbus</CardTitle>
                    <CardText>
                        <li>
                            <ul></ul>
                        </li>
                    </CardText>
                    <CardActions border>
                        <a href="/">
                            <Button raised colored style={{ float: 'right'}}>Select</Button></a>
                    </CardActions>
                </Card>
            </div>
            <div className="project-card">
                {/* Project 2 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/assets/images/nimbus.jpg) center / cover'}}>Cirrus</CardTitle>
                    <CardText>
                        <li>
                            <ul></ul>
                        </li>
                    </CardText>
                    <CardActions border>
                        <a href="/">
                            <Button raised colored style={{ float: 'right'}}>Select</Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
            <div className="project-card">
                {/* Project 3 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/assets/images/stratus.jpg) center / cover'}}>Stratus</CardTitle>
                    <CardText>
                        <li>
                            <ul></ul>
                        </li>
                    </CardText>
                    <CardActions border>
                        <a href="/">
                            <Button raised colored style={{ float: 'right'}}>Select</Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};
export default UserBilling;