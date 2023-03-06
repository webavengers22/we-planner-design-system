import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import './Toggle.css';
import { IComponentBaseProps, CommSize } from '@/types';
import { ToggleColorType } from './type';

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ToggleColorType;
    size?: CommSize;
  };

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ color, size, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'toggle',
      className,
      clsx({
        [`toggle-${size}`]: size,
        [`toggle-${color}`]: color,
      }),
    );

    return (
      <input
        {...props}
        ref={ref}
        type="checkbox"
        data-theme={dataTheme}
        className={classes}
      />
    );
  },
);

Toggle.displayName = 'Toggle';

export default Toggle;
