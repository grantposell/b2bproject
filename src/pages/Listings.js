import React from 'react';
import { IonContent, IonIcon, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './Tab1.css';
// import SignUp from './SignUp';
import SignUp2 from './SignUp2';
import {chatboxOutline } from 'ionicons/icons';

const Listings = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <div style={{display: 'flex', flexDirection: 'row',}}>
            <div>
              <p style={{ fontSize: 35, marginLeft: 20, }}>Listings</p>
            </div>
            <div style={{flex: 1}}></div>
            <div style={{flexDirection: 'row', marginRight: 20,}}>
              <IonIcon style={{ fontSize: '35px' }} icon={chatboxOutline} />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SignUp2 />
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Listings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Listings;
