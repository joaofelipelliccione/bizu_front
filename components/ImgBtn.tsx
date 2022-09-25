import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

interface IProps {
  imgSrc: StaticImageData;
  imgAlt: string;
  href: string;
  imgClassName?: string;
  target?: string;
}

export default function ImgBtn(props: IProps) {
  const {
    imgClassName, href, target, imgSrc, imgAlt,
  } = props;

  return (
    <div className={ imgClassName }>
      <a
        href={ href }
        target={ target }
        rel="noreferrer"
      >
        <Image
          src={ imgSrc }
          alt={ imgAlt }
          layout="responsive"
        />
      </a>
    </div>
  );
}
