import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { searchOutline, speedometerOutline , cartOutline, receiptOutline, personOutline } from 'ionicons/icons';
import Listings from './pages/Listings';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Account from './pages/Account';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/listings" component={Listings} exact={true} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
          <Route path="/Account" component={Account} />
          <Route path="/" render={() => <Redirect to="/listings" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/listings">
            <IonIcon icon={searchOutline} />
            <IonLabel>Listings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/products">
            <IonIcon icon={speedometerOutline} />
            <IonLabel>Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/cart">
            <IonIcon icon={cartOutline} />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/orders">
            <IonIcon icon={receiptOutline} />
            <IonLabel>Orders</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/account">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
