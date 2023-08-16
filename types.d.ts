declare module '@theme/IdealImage' {
  import type {ComponentProps} from 'react';

  export type SrcType = {
    width: number;
    path?: string;
    size?: number;
    format?: 'webp' | 'jpeg' | 'png' | 'gif';
  };

  export type SrcImage = {
    height?: number;
    width?: number;
    preSrc: string;
    src: string;
    images: SrcType[];
  };

  export interface Props extends ComponentProps<'img'> {
    readonly img: {default: string} | {src: SrcImage; preSrc: string} | string;
  }
  export default function IdealImage(props: Props): JSX.Element;
}