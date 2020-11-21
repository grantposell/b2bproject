import React from 'react';
import { IonCard, IonList, IonItem, IonLabel, IonToggle } from '@ionic/react';
import "./SignUp2.css"

const UserNotifications = () => {
    return (
        <div className="projects-grid" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div className="project-card" style={{ justifyContent: "center" }}>
                <IonCard style={{ width: "280px" }}>
                    <IonList>
                        <h1 style={{ textAlign: 'center', }}>Messages</h1>
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
                        <h1 style={{ textAlign: 'center', }}>Orders</h1>
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
                        <h1 style={{ textAlign: 'center', }}>Updates</h1>
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
    );
};
export default UserNotifications;