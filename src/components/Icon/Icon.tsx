import { fIconList, fIconType, sIconList, sIconType } from './vectors';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: fIconType | sIconType; // fIconList와 sIconList의 key 값들
  solid?: boolean;
  size?: 12 | 14 | 16 | 18 | 20 | 24;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  solid,
  ...props
}) => {
  const IconComponent = solid
    ? sIconList[name as sIconType]
    : fIconList[name as fIconType];
  if (!IconComponent) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color || 'currentColor'}
    >
      {IconComponent}
    </svg>
  );
};

export default Icon;
