import React from 'react';
import styled from "styled-components";
import whatsappIcon from './../../src/img/whatssap.png';
// import downloadIcon from './../../src/img/descarga.png';

const ImgW = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;

// const ImgD = styled.img`
//   width: 50px;
//   height: 50px;
//   margin-right: 10px;
// `;

const ButtonW = styled.a`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  position: fixed;
  bottom: 80px;
  right: 3px;
  z-index: 1000;
  transition: background-color 0.3s;

`;

// const ButtonD = styled.a`
//   width: 40px;
//   height: 40px;
//   margin-right: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   border-radius: 50%;
//   text-decoration: none;
//   position: fixed;
//   bottom: 80px;
//   right: 3px;
//   z-index: 1000;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;


const FixedWhatsAppButton = () => {
  return (
    <ButtonW 
      href="https://api.whatsapp.com/send?phone=584128514586" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <ImgW src={whatsappIcon} />
    </ButtonW>
  );
};

// const DownloadButton = () => {
//   const downloadCV = () => {
//     console.log('Download button clicked');
//     const pdfUrl = './../../src/pdf/CV_Full_Stack_Jesus_Elias.pdf';

//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = 'CV-Jesus-Elias.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     console.log('Download started:', pdfUrl);
//   };

//   return (
//     <ButtonD 
//       onClick={downloadCV}
//       className="bg-blue-500 text-white"
//     >
//       <ImgD src={downloadIcon} />
//     </ButtonD>
//   );
// };

export default function FixedPlugin() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3">
      <FixedWhatsAppButton />
      {/* <DownloadButton /> */}
    </div>
  );
}