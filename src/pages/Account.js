import React from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
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
        {/* <IonGrid>
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

        </IonGrid> */}
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