interface ChildrenProps {
  children?: React.ReactNode;
}

interface AsProps {
  as?: React.ElementType;
}

interface DisableProps {
  disabled?: boolean;
}

interface LoadingProps {
  loading?: boolean;
}

interface OnClickProps {
  onClick?: (e?: React.MouseEvent) => void;
}

interface CommonAttrProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

type variantType = 'primary' | 'secondary';

export type {
  ChildrenProps,
  AsProps,
  DisableProps,
  LoadingProps,
  OnClickProps,
  CommonAttrProps,
  variantType,
};
