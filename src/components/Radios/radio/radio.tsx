import type { RadioProps } from './types';
import { RadioStyled, Styled } from './styles';
// import { Spinner } from 'components/Common/Spinner';
// import { LoadingDots } from '../loadingDots';
// import { Typography } from 'components/typography';
export function RadioGroup({ label, children }) {
    return (
      <fieldset>
        <legend>{label}</legend>
        {children}
      </fieldset>
    );
  }

  // function RadioBox({ children, value, name, defaultChecked, disabled }) {
  //   return (
  //     <label>
  //       <input
  //         type="radio"
  //         value={value}
  //         name={name}
  //         defaultChecked={defaultChecked}
  //         disabled={disabled}
  //       />
  //       {children}
  //     </label>
  //   );
  // }

export function Radio({
  className,
  disabled = false,
  variants = 'primary',
  size = 'md',
  loading = false,
  children,
  label,
  
  ...props
}: RadioProps) {
  return (
    
    <div>
      <RadioStyled></RadioStyled>
      {children}
      <RadioStyled></RadioStyled>
      {children}
    </div>
    
  );
}


