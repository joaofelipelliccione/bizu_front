import * as React from 'react';
import Image, { StaticImageData } from 'next/image';

interface IProps {
  imgSrc: StaticImageData;
  imgAlt: string;
  imgClassName?: string;
}

export default function ImgBtn(props: IProps) {
  const { imgClassName, imgSrc, imgAlt } = props;

  return (
    <div className={ imgClassName }>
      <Image
        src={ imgSrc }
        alt={ imgAlt }
        layout="responsive"
      />
    </div>
  );
}
