import type { ButtonProps } from './types';
import { Styled } from './styles';
// import { Spinner } from 'components/Common/Spinner';
import { LoadingDots } from '../loadingDots';
import { Typography } from 'components/typography';

export function GoWithButton({
  className,
  // disabled = false,
  variants = 'primary',
  // size = 'md',
  // loading = false,
  children,
  // ...props
}: ButtonProps) {
  return (
    <>
      {/* <GoWithButton variants={'primary'} size={'sm'}></GoWithButton> */}
      {/* <Styled className={className} size={size} variants={variants} disabled={disabled} {...props}> */}
      <Styled className={className} variants={variants}>
        <Typography variant="button">{children}</Typography>
      </Styled>
      
    </>
  );
}
