import {
  Flex,
  Container,
  Title,
  Stack,
  Group,
  Text,
  Button,
} from '@mantine/core';

import { useNavigate } from 'react-router-dom';

import {
  FiArrowLeft,
  FiHome,
} from 'react-icons/fi';
import BrandIcon from '../../components/BrandIcon';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Flex
      mih="100vh"
      align="center"
      justify="center"
      py="xl"
    >
      <Container size="lg">
        <Stack gap="xl" align="center">
<BrandIcon title="404"/>

          <Stack gap="sm" align="center">
            <Title order={2} c="cream.9">
              Oops! Page Not Found
            </Title>

            <Text
              size="lg"
              maw={520}
              ta="center"
             
            >
              The Boutique page you're looking for
              doesn't exist or has been moved.
              <br />
              Don't worry, there are many other great
              Products waiting for you!
            </Text>
          </Stack>

      
          <Group gap="md">
            <Button
              leftSection={<FiArrowLeft />}
              onClick={() => navigate(-1)}
              variant="outline"
              size="lg"
              color="brand"
              px="xl"
            >
              Go Back
            </Button>

            <Button
              leftSection={<FiHome />}
              onClick={() => navigate('/')}
              size="lg"
              color="brand"
              px="xl"
            >
              Back to Home
            </Button>
          </Group>

        </Stack>
      </Container>
    </Flex>
  );
};

export default NotFoundPage;