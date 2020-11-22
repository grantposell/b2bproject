import React from 'react';
import "./SignUp2.css";
import { IonList, IonItem, IonLabel, IonAvatar, IonIcon, IonSelect, IonSelectOption } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';

const UserAdmin = () => {
    return (
        <div>
            <IonList style={{ width: 600, }}>
                <IonItem>
                    <IonAvatar slot="start">
                        <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                    </IonAvatar>
                    <IonLabel>James Dean</IonLabel>
                    <ion-select slot='end' value="dog">
                        <ion-select-option value="cat">Cat</ion-select-option>
                        <ion-select-option value="dog">Dog</ion-select-option>
                    </ion-select>
                </IonItem>
                <IonItem>
                    <IonAvatar slot="start">
                        <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                    </IonAvatar>
                    <IonLabel>Marion Cotillard</IonLabel>
                    <ion-select slot='end' value="dog">
                        <ion-select-option value="cat">Cat</ion-select-option>
                        <ion-select-option value="dog">Dog</ion-select-option>
                    </ion-select>
                </IonItem>
                <IonItem>
                    <IonAvatar slot="start">
                        <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                    </IonAvatar>
                    <IonLabel>Ricky Martin</IonLabel>
                    <ion-select slot='end' value="dog">
                        <ion-select-option value="cat">Cat</ion-select-option>
                        <ion-select-option value="dog">Dog</ion-select-option>
                    </ion-select>
                </IonItem>
                <IonItem>
                    <IonAvatar slot="start">
                        <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                    </IonAvatar>
                    <IonLabel>Willie Nelson</IonLabel>
                    <ion-select slot='end' value="dog">
                        <ion-select-option value="cat">Cat</ion-select-option>
                        <ion-select-option value="dog">Dog</ion-select-option>
                    </ion-select>
                </IonItem>
                <IonItem>
                    <IonAvatar slot="start">
                        <IonIcon style={{ fontSize: '35px' }} icon={personCircleOutline} />
                    </IonAvatar>
                    <IonLabel>Chuck Norris</IonLabel>
                    <ion-select slot='end' value="dog">
                        <ion-select-option value="cat">Cat</ion-select-option>
                        <ion-select-option value="dog">Dog</ion-select-option>
                    </ion-select>
                </IonItem>
            </IonList>
        </div>
    );
};
export default UserAdmin;