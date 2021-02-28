import React, { useRef } from 'react'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

//ovo je 1.2.0 verzija i izbrisan je importovani @types i zamkenjen je sa custom reactcropper-d.ts
//prekucavao sam i od njega importe i d , ts fajl



interface IProps {
    setImage: (file: Blob) => void;
    imagePreview: string;
}

 const PhotoWidgetCropper: React.FC<IProps> = ({setImage, imagePreview}) => {
const cropper = useRef<Cropper>(null);
//cropper.current?.getData(true)

const cropImage = () => {
    if(cropper.current && typeof cropper.current.getCroppedCanvas() === 'undefined') {
        return;
    }

    cropper &&
      cropper.current &&
      cropper.current.getCroppedCanvas().toBlob((blob: any) => {
        setImage(blob);
      }, 'image/jpeg');
}

    return (
      <Cropper
        ref={cropper}
        src={imagePreview}
        style={{ height: 200, width: '100%' }}
        // Cropper.js options
        aspectRatio={1 / 1}
        preview='.img-preview'
        guides={false}
        viewMode={1}
        dragMode='move'
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        crop={cropImage}
      />
    );
}

export default PhotoWidgetCropper;
