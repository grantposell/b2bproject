import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
// import SignUp from './SignUp';
import SignUp2 from './SignUp2';

const Listings = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SignUp2/>
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
