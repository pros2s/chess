import { ImgHTMLAttributes, useState, useLayoutEffect, ReactElement, Ref } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import { FlexBox } from '../FlexBox';

import cls from './AppImage.module.css';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = ({
  className,
  src,
  alt = 'image',
  loading = 'lazy',
  fallback,
  errorFallback,
  ref,
  ...otherProps
}: AppImageProps) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const [isImageError, setIsImageError] = useState<boolean>(false);

  useLayoutEffect(() => {
    const img = new Image();

    img.src = src ?? '';
    img.alt = alt;

    img.onload = () => {
      setIsImageLoading(false);
    };

    img.onerror = () => {
      setIsImageError(true);
    };
  }, [alt, src]);

  return (
    <FlexBox
      ref={ref}
      className={classNames(cls.container, [className])}
      align='center'
      justify='center'
    >
      {isImageLoading && fallback}

      {isImageError && errorFallback}

      {!isImageLoading && !isImageError && (
        <img alt={alt} src={src} loading={loading} {...otherProps} />
      )}
    </FlexBox>
  );
};

AppImage.displayName = 'AppImage';
