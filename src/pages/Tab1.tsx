import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import Camera1Stream from '../components/Camera1Stream';
import './Tab1.css';


const onButtonClick = () => {
  const link = document.createElement("a");
  link.href = "http://34.142.11.4:5000/camera1/download";
  link.download = "camera1.csv"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton color={'primary'} onClick={onButtonClick}> <a href="http://34.142.11.4:5000/camera1/download"></a>Export CSV</IonButton>

        <Camera1Stream name="Tab 1 page" />

        <iframe style={{
            top: "70%",
            color: "#fff",
            backgroundColor: "#088413",
            border: "1px solid #088413",
            fontSize: 11,
            fontWeight: "bold",
            letterSpacing: 1,
            borderRadius: 4,
            padding: "4px 6px",
            display: "inline-block",
            position: "relative",
            marginLeft: 30,
            lineHeight: 1,
        }} src="http://34.142.11.4:5000/alprd1/mobile" ></iframe>
      </IonContent> 
    </IonPage>
  );
};

export default Tab1;
