import React,{useRef, useState} from 'react';
import {IonApp,IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonInput,IonGrid,IonRow,IonCol,IonButton,IonCard,IonCardContent,IonIcon, IonSegment, IonSegmentButton} from '@ionic/react';

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

const App: React.FC = () => {
  const minInput =useRef<HTMLIonInputElement>(null)
  const maxInput =useRef<HTMLIonInputElement>(null)
  let  fixInput = ""
  const [result, setResult] = useState<number>()

const search = () =>{
  const min = minInput.current?.value
  const max = maxInput.current?.value

  console.log(min, max, typeof(fixInput))
};

const change = (e: any) => {
  fixInput = e
}

const reset = () =>{
  minInput.current!.value='';
  maxInput.current!.value='';
  setResult(undefined)
};

  return(
    <IonApp>

      <IonHeader>
        <IonToolbar mode="ios" color="primary">
          <IonTitle >
            TP1
          </IonTitle>
        </IonToolbar>
      </IonHeader>
        
      <IonContent>

        <IonSegment onIonChange={ e => {change(e.detail.value)}}>
          <IonSegmentButton value="sol">
            <IonLabel>Sol</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="plafond">
            <IonLabel>Plafond</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        
        <IonItem>
          <IonLabel position="floating">
            Prix minimum
          </IonLabel>
          <IonInput ref={minInput}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">
            Prix Maximum
          </IonLabel>
          <IonInput ref={maxInput}></IonInput>
        </IonItem>

        <IonGrid>
          <IonRow>
        
          <IonCol className='ion-text-rigth'>
              <IonButton onClick={search}>
                <IonIcon slot ="start"/>
                Recherche
              </IonButton>
            </IonCol>
            
            <IonCol>
              { result &&
              <IonCard>
                <IonCardContent className='ion-text-center'>
                  {result}
                </IonCardContent>
              </IonCard>
              }
            </IonCol>
          </IonRow>
        </IonGrid>


      </IonContent>
    </IonApp>
  )
  };

export default App;
