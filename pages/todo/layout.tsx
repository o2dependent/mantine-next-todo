import { Paper } from '@mantine/core';
import React from 'react';
import { AppSidebar } from '../../components/AppSidebar/AppSidebar';

export const TodoLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Paper display="flex">
    <AppSidebar />
    {children}
  </Paper>
);
