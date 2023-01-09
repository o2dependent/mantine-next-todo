import { Center, Container } from '@mantine/core';
import { AuthenticationForm } from '../components/AuthenticationForm/AuthenticationForm';

export default function LoginPage() {
  return (
    <Container h="100%">
      <Center h="100%">
        <AuthenticationForm />
      </Center>
    </Container>
  );
}
