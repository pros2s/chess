declare module '*.module.css' {
  const classes: { [className: string]: string };
  export default classes;
}

declare module '*.png';
declare module '*.ico';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.zip';

declare module '*.svg?react' {
  import { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}

declare global {
  type SvgComponent = (props: SVGProps<SVGElement>) => ReactElement;
}
