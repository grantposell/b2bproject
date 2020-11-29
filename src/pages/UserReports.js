import React from 'react';
import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem } from '@ionic/react';


const UserReports = () => {
    return (
        <div>
            <div style={{ float: 'left', height: 50 }}>
                <select name="cars" id="cars" style={{ height: 30 }}>
                    <option value="James Dean">James Dean</option>
                    <option value="Marion Cotillard">Marion Cotillard</option>
                    <option value="Ricky Martin">Ricky Martin</option>
                    <option value="Willie Nelson">Willie Nelson</option>
                    <option value="Chuck Norris">Chuck Norris</option>
                </select>
                <button type="button" style={{ height: 30, marginLeft: 10 }}>Generate Report</button>
            </div>
            <br />
            <br />
            <div >
                <h3 style={{marginLeft: 150}}>Buyer</h3>
                <div style={{ display: 'flex', margin: 20, justifyContent: 'center' }}>
                    <IonCard style={{ width: 300, height: 300 }}>
                        <IonCardTitle style={{ textAlign: 'center', margin: 20 }}>Listings Purchased</IonCardTitle>
                    </IonCard>
                    <IonCard style={{ width: 300, height: 300 }}>
                        <IonCardTitle style={{ textAlign: 'center', margin: 20 }}>Order in Route</IonCardTitle>
                    </IonCard>
                    <IonCard style={{ width: 300, height: 300 }}>
                        <IonCardTitle style={{ textAlign: 'center', margin: 20 }}>Orders Fulfilled</IonCardTitle>
                    </IonCard>
                </div>
                <h3 style={{marginLeft: 150}}>Sales</h3>
                <div style={{ display: 'flex', margin: 20, justifyContent: 'center' }}>
                    <IonCard style={{ width: 300, height: 300 }}>
                        <IonCardTitle style={{ textAlign: 'center', margin: 20 }}>Listings Filled</IonCardTitle>
                    </IonCard>
                    <IonCard style={{ width: 300, height: 300 }}>
                        <IonCardTitle style={{ textAlign: 'center', margin: 20 }}>Listings Received</IonCardTitle>
                    </IonCard>
                    <IonCard style={{ width: 300, height: 300 }}>
                        <IonCardTitle style={{ textAlign: 'center', margin: 20 }}>Listings in Route</IonCardTitle>
                    </IonCard>
                </div>
            </div>
        </div>

    );
};
export default UserReports;