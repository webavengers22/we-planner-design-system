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
  shapeStyle,
} from './styles';
// import { Spinner } from 'components/Common/Spinner';
import { schemes } from './constants';
import { css } from '@emotion/react';
import { getCSSVarValue } from '@/utils';
import { Typography } from '@/components/Typography/typography';

export function Button({
  children,
  shape = 'circle',
  type = 'primary',
  variant = 'default',
  size = 'md',
  isFullWidth,
  isIconLocatedEnd,
  iconPosition = 'left',
  icon,
  asLink,
  htmlType,
  href,
  marginTop,
  ...rest
}: ButtonProps) {
  const scheme = schemes[type];

  const styles = [
    buttonStyle(size),
    shapeStyle(shape),
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
        <span css={iconWrapperStyle('left', isIconLocatedEnd)}>{icon}</span>
      )}
      {isIconLocatedEnd ? <div css={takeFullWidth}>{children}</div> : children}
      {icon && iconPosition === 'right' && (
        <span css={iconWrapperStyle('right', isIconLocatedEnd)}>{icon}</span>
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
