import type { ButtonProps } from './types';
import {
  buttonStyle,
  defaultStyle,
  outlineStyle,
  ghostStyle,
  fullWidthStyle,
  iconWrapperStyle,
  takeFullWidth,
  resetLinkStyle,
} from './styles';
// import { Spinner } from 'components/Common/Spinner';
import { LoadingDots } from '@/components/Buttons/loadingDots';
import { schemes } from './constants';
import { css } from '@emotion/react';
import { getCSSVarValue } from '@/utils';

export function Button({
  children,
  type = 'primary',
  variant = 'default',
  size = 'md',
  isFullWidth,
  isStickIconToEnd,
  iconPosition = 'left',
  icon,
  asLink,
  htmlType,
  href,
  marginTop,
  isSquare,
  ...rest
}: ButtonProps) {
  const scheme = schemes[type];

  const styles = [
    buttonStyle(size, isSquare),
    variant === 'default' && defaultStyle(scheme),
    variant === 'outline' && outlineStyle(scheme),
    variant === 'ghost' && ghostStyle(getCSSVarValue(scheme.background)),
    isFullWidth && fullWidthStyle,
    marginTop &&
      css`
        margin-top: ${marginTop};
      `,
  ];

  const contents = (
    <>
      {icon && iconPosition === 'left' && (
        <div css={iconWrapperStyle('left', isStickIconToEnd)}>{icon}</div>
      )}
      {isStickIconToEnd ? <div css={takeFullWidth}>{children}</div> : children}
      {icon && iconPosition === 'right' && (
        <div css={iconWrapperStyle('right', isStickIconToEnd)}>{icon}</div>
      )}
    </>
  );

  if (asLink) {
    return (
      <a href={href} css={styles.concat(resetLinkStyle)} {...(rest as any)}>
        {contents}
      </a>
    );
  }

  return (
    <button css={styles} type={htmlType} {...rest}>
      {contents}
    </button>
  );
}
