import { Ref } from 'preact';

import { HTMLAttributes, ReactNode, forwardRef } from 'preact/compat';

import { Classes, classNames } from '@/shared/lib/helpers/classNames';

import cls from './FlexBox.module.css';

export type JustifyType = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type AlignType = 'start' | 'center' | 'end' | 'stretch';
export type DirectionType = 'row' | 'column';

interface FlexBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  justify?: JustifyType;
  align?: AlignType;
  direction?: DirectionType;
  gap?: number | string;
  isWrap?: boolean;
  className?: string;
}

export const justifyPos: Record<JustifyType, string> = {
  around: cls['justify-around'],
  between: cls['justify-between'],
  center: cls['justify-center'],
  end: cls['justify-end'],
  start: cls['justify-start'],
  evenly: cls['justify-evenly'],
};

export const alignPos: Record<AlignType, string> = {
  center: cls['align-center'],
  end: cls['align-end'],
  start: cls['align-start'],
  stretch: cls['align-stretch'],
};

export const flexDirection: Record<DirectionType, string> = {
  column: cls.column,
  row: cls.row,
};

export const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(
  (
    {
      children,
      className,
      align = 'start',
      direction = 'row',
      gap = 0,
      justify = 'start',
      isWrap,
      style,
      ...otherProps
    },
    ref: Ref<HTMLDivElement>,
  ) => {
    const classes: Classes = [
      justifyPos[justify],
      alignPos[align],
      flexDirection[direction],
      className,
    ];

    return (
      <div
        ref={ref}
        style={{ flexWrap: isWrap ? 'wrap' : 'nowrap', gap, ...(style as object) }}
        className={classNames(cls['flex-box'], classes)}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);
