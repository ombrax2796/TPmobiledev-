import React,{useRef, useState} from 'react';

import {IonApp,IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonInput,IonGrid,IonRow,IonCol,IonButton,IonCard,IonCardContent,IonIcon} from '@ionic/react';
import{calculatorOutline} from 'ionIcons/icons'


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
  const priceInput =useRef<HTMLIonInputElement>(null)
  const rentInput =useRef<HTMLIonInputElement>(null)
  const [result, setResult] = useState<number>()

const calculate = () =>{
  const priceValue = priceInput.current?.value
  const rentValue = rentInput.current?.value

  if( !priceValue || !rentValue) return
  const renta = +rentValue * 12 * 100 / +priceValue

  setResult(renta)
}

const reset = () =>{
  priceInput.current!.value='';
  rentInput.current!.value='';
  setResult(undefined)
}

  return(
    <IonApp>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            Investissement
          </IonTitle>
        </IonToolbar>
      </IonHeader>
        
      <IonContent>

        <IonItem>
          <IonLabel position="floating">
            price
          </IonLabel>
          <IonInput ref={priceInput}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">
            rent
          </IonLabel>
          <IonInput ref={rentInput}></IonInput>
        </IonItem>

        <IonGrid>
          <IonRow>
        
            <IonCol className='ion-text-left'>
              <IonButton onClick={calculate}>
                <IonIcon slot ="start" icon ="calculatorOutline"/>calculate
              </IonButton>
            </IonCol>

            <IonCol>
              {result &&
              <IonCard>
                <IonCardContent className='ion-text-center'>
                  {result}
                </IonCardContent>
              </IonCard>
              }
            </IonCol>

            <IonCol className='ion-text-rigth'>
              <IonButton onClick={reset}>
                <IonIcon slot ="start" icon ="calculatorOutline"/>reset
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>


      </IonContent>
    </IonApp>
  )
  };

export default App;
