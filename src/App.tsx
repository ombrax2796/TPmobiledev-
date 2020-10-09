import React,{useRef, useState} from 'react';
import {IonApp,IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonInput,IonGrid,IonRow,IonCol,IonButton,IonCard,IonCardContent,IonIcon, IonSegment, IonSegmentButton, IonList, IonItemDivider, IonCheckbox, IonAlert, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';

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
import { Z_FILTERED } from 'zlib';

const data = [
  {
    name: 'Rekt 1000',
    prix: 100,
    fix: ['sol'],
    Qualite: ['hd']
  },
  {
    name: 'Rekt 1001',
    prix: 150,
    fix: ['sol'],
    Qualite: ['4k']
  },
   {
    name: 'Rekt 2000',
    prix: 200,
    fix: ['plafond',],
    Qualite: ['hd']
  },
  {
    name: 'Rekt 2001',
    prix: 250,
    fix: ['plafond',],
    Qualite: ['4k']
  },
   {
    name: 'Rekt 3000',
    prix: 300,
    fix: ['plafond', 'sol'],
    Qualite: ['hd']
  },
  {
    name: 'Rekt 3001',
    prix: 350,
    fix: ['plafond', 'sol'],
    Qualite: ['4k']
  },
  {
    name: 'Rekt SUPREME',
    prix: 9999,
    fix: ['plafond', 'sol'],
    Qualite: ['hd', '4k']
  }
]

const App: React.FC = () => {
  let  fixInput = ""
  let recherche: any[] = [];
  const minInput =useRef<HTMLIonInputElement>(null)
  const maxInput =useRef<HTMLIonInputElement>(null)
  const [result, setResult] = useState<number>()
  const [hdCheck, setHdCheck] = useState(false);
  const [KCheck, setKCheck] = useState(false);
  const [errorInputs, setErrorInputs] = useState(false);

const search = () =>{
  const min = minInput.current?.value
  const max = maxInput.current?.value

  if (min == '' || max == '' || fixInput == '' || (hdCheck == false && KCheck == false)) {
    setErrorInputs(true)
  } else {
    recherche = data.filter(e => e.prix <= Number(max) && e.prix >= Number(min) && e.fix.includes(fixInput));
    console.log(recherche)
  }
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
            Vidéoprojecteur
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
        <IonAlert
          isOpen={errorInputs}
          onDidDismiss={() => setErrorInputs(false)}
          cssClass='my-custom-class'
          header={'Erreur'}
          message={'Merci de remplir tous les champs'}
          buttons={['OK']}
        />
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
        
        <IonList>
          <IonItemDivider>Choix de qualité d'affichage :</IonItemDivider>
            <IonItem>
              <IonLabel>HD</IonLabel>
              <IonCheckbox checked={hdCheck} onIonChange={e => setHdCheck(e.detail.checked)} />
           </IonItem>
              <IonItem>
              <IonLabel>4K</IonLabel>
            <IonCheckbox checked={KCheck} onIonChange={e => setKCheck(e.detail.checked)} />
          </IonItem>
        </IonList>
        <IonGrid>
          <IonRow>
        
          <IonCol>
              <IonButton onClick={search}>
                Recherche
              </IonButton>
            </IonCol>
            
            <IonCol>
              {recherche.map(({name, prix}) =>        
              <IonContent>

                <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>{prix}</IonCardSubtitle>
                  <IonCardTitle>{name}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonContent>

              )}

            </IonCol>
          </IonRow>
        </IonGrid>


      </IonContent>
    </IonApp>
  )
  };

export default App;
