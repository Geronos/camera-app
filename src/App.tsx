import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact,IonTabButton,IonLabel,IonIcon, IonTabs, IonTabBar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, images, square, triangle } from 'ionicons/icons';
import { Tab2 } from './pages/Tab2';

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
       <IonRouterOutlet>
        <Route path="/tab2" component={Tab2} exact={true}/>
        <Route path="/" render={() => <Redirect to="/tab1" />} exact={true}/>
       </IonRouterOutlet>
       <IonTabBar slot="bottom">
         <IonTabButton tab="tab1" href="/tab1">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
         </IonTabButton>
         <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={images}/>
          <IonLabel>Photos</IonLabel>
         </IonTabButton>
         <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={square} />
          <IonLabel>Tab 3</IonLabel>
         </IonTabButton>
         </IonTabBar>
       </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
