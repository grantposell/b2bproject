import React from 'react';
import { IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { chatboxOutline } from 'ionicons/icons';

const Cart = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <div style={{display: 'flex', flexDirection: 'row',}}>
            <div>
              <p style={{ fontSize: 35, marginLeft: 20, }}>Cart</p>
            </div>
            <div style={{flex: 1}}></div>
            <div style={{flexDirection: 'row', marginRight: 20,}}>
              <IonIcon style={{ fontSize: '35px' }} icon={chatboxOutline} />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cart</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Cart;