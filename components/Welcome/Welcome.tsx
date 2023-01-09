import { Title, Text, Anchor, Button } from '@mantine/core';
import Link from 'next/link';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Lowky
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Manage your life with friends and family.
      </Text>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Anchor href="https://mantine.dev/guides/next/" size="lg">
        this guide
      </Anchor>
    </>
  );
}
