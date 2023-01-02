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

  function RadioBox({ children, value, name, defaultChecked, disabled }) {
    return (
      <label>
        <input
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        {children}
      </label>
    );
  }

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
    <>
    <label>
      <input
        type="radio"
        disabled={disabled}
      />
      {children}
    </label>
    <div>
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
    <RadioStyled></RadioStyled>
    <div>
        {/* <Styled></Styled> */}
    </div>
    </div>
      <RadioGroup>
        {/* <Radio>1</Radio>
        <Radio>2</Radio>
        <Radio>3</Radio> */}
        <RadioStyled></RadioStyled>
        <RadioStyled></RadioStyled>
        <RadioBox></RadioBox>
        <RadioBox></RadioBox>
      </RadioGroup>
    </>
  );
}


