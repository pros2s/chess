/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'title' | 'type' | 'ref'> {
  children: ReactNode;

  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;

  ref?: Ref<HTMLButtonElement>;
  className?: string;
}

export const Button = ({
  children,
  className,
  type = 'button',
  ref,
  ...restProps
}: ButtonProps) => (
  <button
    ref={ref}
    type={type}
    className={className}
    aria-disabled={restProps.disabled}
    {...restProps}
  >
    {children}
  </button>
);
Button.displayName = 'Button';
