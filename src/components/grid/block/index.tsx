import { FC } from 'react';
import { Container } from './styles';

interface IProps {
  colIndex: number;
  rowIndex: number;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return <Container key={`${rowIndex}-${colIndex}`} />;
};

export default Block;
