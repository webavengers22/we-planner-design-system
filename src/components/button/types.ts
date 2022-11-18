export type ButtonSizeType = 'small' | 'medium' | 'large' | 'xLarge';
export type ButtonVariantType = 'primary' | 'secondary';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  variants: ButtonVariantType;
  size: ButtonSizeType;
  loading?: boolean;
  block?: boolean;
  children: React.ReactNode;
}
