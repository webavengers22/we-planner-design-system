import type { RadioProps } from './types';
import { RadioStyled, Styled } from './styles';
// import { Spinner } from 'components/Common/Spinner';
// import { LoadingDots } from '../loadingDots';
// import { Typography } from 'components/typography';

export function Radio({
  className,
  disabled = false,
  variants = 'primary',
  size = 'md',
  loading = false,
  children,
  ...props
}: RadioProps) {
  return (
    // <Styled 
    // className={className} 
    // size={size} 
    // variants={variants} 
    // disabled={disabled} {...props}>
    //   {loading
    //     ? // <LoadingDots variants="primary" />
    //       'True!'
    //     : // <Typography variant="button">{children}</Typography>
    //       'False'}
    // </Styled>
    <RadioStyled></RadioStyled>
  );
}

