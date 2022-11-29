import { variantType } from 'types/ComponentProps';
import { Layout } from './styles';

export interface LoadingDotsProps {
  variants: variantType;
}

export const LoadingDots = ({ variants = 'primary' }: LoadingDotsProps) => {
  return (
    <Layout variants={variants}>
      <span />
    </Layout>
  );
};
