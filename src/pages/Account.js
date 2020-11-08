import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
// import { Tabs, Tab } from 'react-mdl';

// import './Tab3.css';

const Account = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar transparent>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Users &amp; Accounts
            </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Notifications
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Privacy &amp; Sharing
            </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Referral Code
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

        </IonGrid>
        {/* <FontAwesomeIcon icon={["far", "coffee"]} /> */}



        {/* <div className="demo-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Starks</Tab>
            <Tab>Lannisters</Tab>
            <Tab>Targaryens</Tab>
          </Tabs>
          <section>
            <div className="content">Content for the tab: {this.state.activeTab}</div>
          </section>
        </div> */}

      </IonContent>
    </IonPage>
  );
};

export default Account;