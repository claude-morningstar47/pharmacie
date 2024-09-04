import React from 'react';
import GoogleDriveViewer from '../utils/powerPoint';

function Simulation() {
  // const pptUrl = 'https://docs.google.com/presentation/d/1KEzJHir_O_2UO0ilujCOFujhFA8ml_9p/edit?usp=share_link&ouid=112890205379560722207&rtpof=true&sd=true';
  // const pptUrl = 'https://docs.google.com/presentation/d/1KEzJHir_O_2UO0ilujCOFujhFA8ml_9p/edit#slide=id.p1'; // Remplace par ton URL d'intégration
const pptUrl = '1KEzJHir_O_2UO0ilujCOFujhFA8ml_9p'
  return (
    <div>
         <h1>Diaporama PowerPoint</h1>
         <GoogleDriveViewer fileId={pptUrl} />
    </div>
  );
}

export default Simulation;




