import React from 'react';
import "./SignUp2.css";
import { IonList, IonItem, IonLabel, IonAvatar, IonIcon, IonCard } from '@ionic/react';
import { FABButton, Icon } from 'react-mdl';
import { personCircleOutline, closeCircleOutline, addCircleOutline } from 'ionicons/icons';

const UserAdmin = () => {
    return (
        <div style={{ top: 0, left: 0,position: 'relative', margin: 5% 'auto', borderRadius: 2 }}>
            <h2>User Permissions</h2>
            <br />
            {/* <FABButton mini colored>
                <Icon name="add" />
            </FABButton> */}
            <IonCard style={{ width: 600 }}>
                <IonItem>
                    <IonAvatar slot="start">
                        <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                    </IonAvatar>
                    <ion-input placeholder="Full Name"></ion-input>
                    <ion-input placeholder="Email"></ion-input>
                    <ion-select slot='end' value="Viewer">
                        <ion-select-option value="Viewer">Viewer</ion-select-option>
                        <ion-select-option value="User">User</ion-select-option>
                        <ion-select-option value="Admin">Admin</ion-select-option>
                    </ion-select>
                    <IonIcon slot='end' icon={addCircleOutline} />
                </IonItem>
                <IonList>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                        </IonAvatar>
                        <IonLabel>James Dean</IonLabel>
                        <ion-select slot='end' value="Viewer">
                            <ion-select-option value="Viewer">Viewer</ion-select-option>
                            <ion-select-option value="User">User</ion-select-option>
                            <ion-select-option value="Admin">Admin</ion-select-option>
                        </ion-select>
                        <IonIcon slot='end' icon={closeCircleOutline} />
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                        </IonAvatar>
                        <IonLabel>Marion Cotillard</IonLabel>
                        <ion-select slot='end' value="Viewer">
                            <ion-select-option value="Viewer">Viewer</ion-select-option>
                            <ion-select-option value="User">User</ion-select-option>
                            <ion-select-option value="Admin">Admin</ion-select-option>
                        </ion-select>
                        <IonIcon slot='end' icon={closeCircleOutline} />
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                        </IonAvatar>
                        <IonLabel>Ricky Martin</IonLabel>
                        <ion-select slot='end' value="Viewer">
                            <ion-select-option value="Viewer">Viewer</ion-select-option>
                            <ion-select-option value="User">User</ion-select-option>
                            <ion-select-option value="Admin">Admin</ion-select-option>
                        </ion-select>
                        <IonIcon slot='end' icon={closeCircleOutline} />
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                        </IonAvatar>
                        <IonLabel>Willie Nelson</IonLabel>
                        <ion-select slot='end' value="Viewer">
                            <ion-select-option value="Viewer">Viewer</ion-select-option>
                            <ion-select-option value="User">User</ion-select-option>
                            <ion-select-option value="Admin">Admin</ion-select-option>
                        </ion-select>
                        <IonIcon slot='end' icon={closeCircleOutline} />
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                        </IonAvatar>
                        <IonLabel>Chuck Norris</IonLabel>
                        <ion-select slot='end' value="Viewer">
                            <ion-select-option value="Viewer">Viewer</ion-select-option>
                            <ion-select-option value="User">User</ion-select-option>
                            <ion-select-option value="Admin">Admin</ion-select-option>
                        </ion-select>
                        <IonIcon slot='end' icon={closeCircleOutline} />
                    </IonItem>
                </IonList>
            </IonCard>
        </div>
    );
};
export default UserAdmin;