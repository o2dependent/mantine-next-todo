import { useMemo, useState } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, Title } from '@mantine/core';
import type { TablerIcon } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: '0 0 60px',
    width: '60px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    width: '300px',
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: '44px',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      color: theme.white,
    },
  },
}));

interface AppSideBarProps {
  items: ({ icon: TablerIcon; label: string } & (
    | { links: { label: string; href: string }[]; href?: never }
    | { links?: never; href: string }
  ))[];
}

export const AppSidebar: React.FC<AppSideBarProps> = ({ items }) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);
  const [activeLink, setActiveLink] = useState(items?.[0]?.links?.[0] ? 0 : undefined);

  const mainLinks = useMemo(
    () =>
      items?.map((item, idx) => (
        <Tooltip
          label={item.label}
          position="right"
          withArrow
          transitionDuration={0}
          key={item.label}
        >
          <UnstyledButton
            onClick={() => setActive(idx)}
            className={cx(classes.mainLink, { [classes.mainLinkActive]: idx === active })}
          >
            <item.icon stroke={1.5} />
          </UnstyledButton>
        </Tooltip>
      )),
    [active]
  );

  const links = useMemo(
    () =>
      active &&
      (items[active]?.links?.map(({ href, label }, idx) => (
        <Link
          className={cx(classes.link, { [classes.linkActive]: activeLink === idx })}
          href={href}
          onClick={(event) => {
            event.preventDefault();
            setActiveLink(idx);
          }}
          key={label}
        >
          {label}
        </Link>
      )) ??
        null),
    [activeLink, active]
  );

  return (
    <Navbar height="100%" w="fit-content">
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>
        {Array.isArray(links) && (
          <div className={classes.main}>
            <Title order={4} className={classes.title}>
              {items?.[active]?.label}
            </Title>

            {links}
          </div>
        )}
      </Navbar.Section>
    </Navbar>
  );
};
