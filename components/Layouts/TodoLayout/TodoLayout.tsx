import { Paper } from '@mantine/core';
import React from 'react';
import { IconNotes } from '@tabler/icons';
import { AppSidebar } from '../../AppSidebar/AppSidebar';

export const TodoLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Paper display="flex" h="100%">
    <AppSidebar
      items={[
        {
          label: 'Lists',
          icon: IconNotes,
          links: [
            {
              label: 'Store Stuff',
              href: `/todo/${encodeURIComponent('Store Stuff')}`,
            },
          ],
        },
      ]}
    />
    {children}
  </Paper>
);
