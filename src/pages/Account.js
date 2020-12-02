import React from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonToolbar, } from '@ionic/react';
import Settings from './Settings';
import { chatboxOutline } from 'ionicons/icons';

// import './Tab3.css';

const Account = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar transparent>
        <div style={{display: 'flex', flexDirection: 'row',}}>
            <div>
              <p style={{ fontSize: 35, marginLeft: 20, }}>Account</p>
            </div>
            <div style={{flex: 1}}></div>
            <div style={{flexDirection: 'row', marginRight: 20,}}>
              <IonIcon style={{ fontSize: '35px' }} icon={chatboxOutline} />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Settings />
      </IonContent>
    </IonPage>
  );
};

export default Account;