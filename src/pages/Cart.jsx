import {
  ActionIcon,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

import ProductCard from '../components/cards/ProductCard';
import { useCart } from '../context/useCart';

const Cart = () => {
  const {
    items,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <Container size="md" py={{ base: 'xl', md: 80 }}>
        <Card bg="cream.1" p="xl" radius="md" withBorder>
          <Stack align="center" gap="md">
            <Title order={2} c="brand.8" ta="center">Your cart is empty</Title>
            <Text c="dimmed" ta="center">
              Add a bouquet or keychain to keep your Boutique picks here.
            </Text>
            <Button component={Link} to="/products" color="brand">
              Browse Products
            </Button>
          </Stack>
        </Card>
      </Container>
    );
  }

  return (
    <Container size="xl" py={{ base: 'md', md: 'xl' }}>
      <Stack gap="xl">
        <Group justify="space-between" align="flex-end">
          <Stack gap={4}>
            <Title c="brand.8">Cart</Title>
            <Text c="dimmed">Review your selected Boutique pieces.</Text>
          </Stack>

          <Button variant="subtle" color="brand" onClick={clearCart}>
            Clear Cart
          </Button>
        </Group>

        <Grid gutter="lg" align="flex-start">
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Stack gap="md">
              {items.map(({ product, quantity }) => (
                <ProductCard key={product.id} product={product} variant="cart">
                  <Stack gap="sm" mt="sm">
                    <Group justify="space-between">
                      <Text size="sm" c="dimmed">Quantity</Text>
                      <Group gap="xs">
                        <ActionIcon
                          variant="light"
                          color="brand"
                          aria-label={`Decrease ${product.productname} quantity`}
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          <FiMinus />
                        </ActionIcon>

                        <Text fw={700} miw={24} ta="center">
                          {quantity}
                        </Text>

                        <ActionIcon
                          variant="light"
                          color="brand"
                          aria-label={`Increase ${product.productname} quantity`}
                          onClick={() => increaseQuantity(product.id)}
                        >
                          <FiPlus />
                        </ActionIcon>
                      </Group>
                    </Group>

                    <Group justify="space-between">
                      <Text fw={700} c="brand.7">
                        EGP {product.price * quantity}
                      </Text>
                      <Button
                        variant="subtle"
                        color="brand"
                        leftSection={<FiTrash2 />}
                        onClick={() => removeItem(product.id)}
                      >
                        Remove
                      </Button>
                    </Group>
                  </Stack>
                </ProductCard>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Card bg="cream.1" p="lg" radius="md" withBorder>
              <Stack gap="md">
                <Title order={3} c="brand.8">Summary</Title>
                <Group justify="space-between">
                  <Text c="dimmed">Subtotal</Text>
                  <Text fw={700}>EGP {cartTotal}</Text>
                </Group>
                <Divider />
                <Group justify="space-between">
                  <Text fw={700} c="brand.8">Total</Text>
                  <Text fw={700} c="brand.8">EGP {cartTotal}</Text>
                </Group>
                <Button component={Link} to="/products" color="brand" fullWidth variant="light">
                  Continue Shopping
                </Button>
                <Button component={Link} to="/checkout" color="success" fullWidth>
                  Proceed to Checkout
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Cart;
