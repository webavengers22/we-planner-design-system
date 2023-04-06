import { Layout } from './styles';

export interface LoadingDotsProps {
  color: 'primary' | 'secondary';
}

export const LoadingDots = ({ color = 'primary' }: LoadingDotsProps) => {
  return (
    <Layout color={color}>
      <span />
    </Layout>
  );
};
