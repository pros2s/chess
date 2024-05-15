import cls from './Square.module.css';

interface SquareProps {
  className?: string;
}

export const Square = ({ className }: SquareProps) => (
  <div style={{ backgroundColor: 'brown' }} className={`${cls.square} ${className}`} />
);

Square.displayName = 'Square';
