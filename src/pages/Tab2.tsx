import { UserPhoto, usePhotoGallery } from '../hooks/usePhotoGallery';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon,IonGrid,IonRow,IonCol,IonImg, IonModal, IonButtons, IonButton, IonFooter, IonAlert} from '@ionic/react';
import { arrowBackOutline, camera, trashOutline } from 'ionicons/icons';
import { useState } from 'react';


export const Tab2: React.FC = () => {
  const { photos,takePhoto, deletePhoto } = usePhotoGallery();
  const [isopen, setopen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [filename, setFilename] = useState('');
  const [isDelete, setDelete] = useState(false);

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Galeri</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
  <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol onClick={() => {setopen(true); setSelectedImage(photo.webviewPath || ""); setFilename(photo.filepath)}} size="6" size-md="4" size-lg="3" style={{ display: 'flex', justifyContent: 'center', alignItem: 'center'}} key={photo.filepath}>
          <IonImg src={photo.webviewPath} style={{ maxWidth: '100%', height: 'auto'}}/>
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
  <IonFab
      slot="fixed"
      vertical="bottom"
      horizontal="center"
      className="ion-margin-bottom"
      >
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
      <IonModal isOpen={isopen}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>{filename}</IonTitle>
                <IonButtons slot='start'>
                  <IonButton onClick={() => setopen(false)}>
                    <IonIcon icon={arrowBackOutline}></IonIcon>
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonImg src={selectedImage} style={{ width: '100%', height: 'auto' }}/>
            </IonContent>
            <IonFooter>
              <IonToolbar>
                <IonButtons className="ion-justify-content-center">
                  <IonButton role="destructive" onClick={() => setDelete(true)}>
                    <IonIcon icon={trashOutline}></IonIcon>
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonFooter>
        </IonModal>
        <IonAlert isOpen={isDelete} header='Confirmation' subHeader='Delete Photo' message="Apakah Anda yakin ingin menghapusnya?" buttons={[{
          text: 'Cancel',
          role: 'cancel',
        },
      {
        text: 'Yes',
        role: 'destructive',
        handler: () => {deletePhoto(filename), setDelete()}
      }]}></IonAlert>
</IonContent>
    
  </IonPage>
  ); 
};
