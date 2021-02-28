
declare module 'react-cropper' {
import Cropper from 'cropperjs';
import * as cropperjs from 'cropperjs';
import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface ReactCropperProps extends Cropper.Options, Omit<React.HTMLProps<HTMLImageElement>, 'data' | 'ref'> {
    ref?: React.LegacyRef<ReactCropper>;
}
//ovo sam zakomentarisao bilo by default kod njega nema

export interface ReactCropperProps extends cropperjs.CropperOptions,
Omit<React.HTMLProps<HTMLImageElement>, 'data' | 'ref'> {
    ref?: string | React.RefObject<Cropper> | ((cropper: null | ReactCropper) => any )
}// prekucao od njega

interface ReactCropper extends cropperjs {}
//interface ReactCropper extends Cropper {} // tslint:disable-line no-empty-interface
 class ReactCropper extends React.Component<ReactCropperProps> {
    on(eventname: string, callback: () => void): void;
}
export default ReactCropper;
}
