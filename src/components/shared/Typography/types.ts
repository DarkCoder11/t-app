import { HTMLProps, ReactNode } from 'react';

export interface ITypographyProps extends HTMLProps<HTMLDivElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
}
