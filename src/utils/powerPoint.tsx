// import { Card } from "antd";
// import React from "react";

// interface GoogleSlidesViewerProps {
//   url: string;
// }

// const GoogleSlidesViewer: React.FC<GoogleSlidesViewerProps> = ({ url }) => {
//   return (
//     <>
//       {/* <Card title="Présentation PowerPoint" style={{ margin: "20px" }}> */}
//         {/* <div style={{ position: "relative", width: "100%", height: "800px" }}> */}
//         <iframe
//           src={url}
//           width="100%"
//           height="500px"
//           // frameBorder="0"
//           allowFullScreen
//           title="Présentation PowerPoint"
//         ></iframe>
//         {/* </div> */}
//       {/* </Card> */}
//     </>
//   );
// };

// export default GoogleSlidesViewer;

import React from 'react';
import { Card } from 'antd';

interface GoogleSlidesViewerProps {
  fileId: string;
}


const GoogleDriveViewer: React.FC<GoogleSlidesViewerProps> = ({ fileId }) => {
  // const fileId = "your_file_id_here";
  const driveViewerUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <Card title="Présentation PowerPoint" style={{ margin: '20px' }}>
      <iframe
        src={driveViewerUrl}
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title='Presentation '
      ></iframe>
    </Card>
  );
};

export default GoogleDriveViewer;
