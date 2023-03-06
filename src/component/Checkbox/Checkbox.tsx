import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import './Checkbox.css';
import { IComponentBaseProps, CommSize } from '@/types';
import { CheckBoxColorType } from './type';

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: CheckBoxColorType;
    size?: CommSize;
    indeterminate?: boolean;
  };

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { color, size, indeterminate, dataTheme, className, ...props },
    ref,
  ): JSX.Element => {
    const classes = twMerge(
      'checkbox',
      className,
      clsx({
        [`checkbox-${size}`]: size,
        [`checkbox-${color}`]: color,
      }),
    );

    const checkboxRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement);

    useEffect(() => {
      if (!checkboxRef.current) {
        return;
      }

      if (indeterminate) {
        checkboxRef.current.indeterminate = true;
      } else {
        checkboxRef.current.indeterminate = false;
      }
    }, [indeterminate]);

    return (
      <input
        {...props}
        ref={checkboxRef}
        type="checkbox"
        data-theme={dataTheme}
        className={classes}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
