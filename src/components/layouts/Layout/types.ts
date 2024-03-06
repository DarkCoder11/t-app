import React from 'react';

export type TLayoutProps = {
  children: React.ReactNode;
} & Partial<{
  inLayout: boolean;
}>;
