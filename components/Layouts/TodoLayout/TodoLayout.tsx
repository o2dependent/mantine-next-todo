import { Paper } from '@mantine/core';
import React from 'react';
import { IconDashboard, IconNotes } from '@tabler/icons';
import { AppSidebar } from '../../AppSidebar/AppSidebar';

export const TodoLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Paper display="flex" h="100%">
    <AppSidebar
      items={[
        {
          label: 'Dashboard',
          icon: IconDashboard,
          href: '/todo',
        },
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
    <Paper style={{ flexGrow: 1 }}>{children}</Paper>
  </Paper>
);
