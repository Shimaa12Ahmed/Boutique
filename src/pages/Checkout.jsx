import {
  Alert,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  List,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FiMessageCircle, FiShoppingBag } from 'react-icons/fi';

import { WHATSAPP_NUMBER } from '../constants/storeConfig';
import { useCart } from '../context/useCart';

const phonePattern = /^[0-9+\-()\s]{7,20}$/;

const formatCurrency = (value) => `EGP ${value}`;

const buildWhatsappMessage = ({ items, cartTotal, customer }) => {
  const productLines = items.map(({ product, quantity }, index) => {
    const subtotal = product.price * quantity;

    return [
      `${index + 1}. ${product.productname}`,
      `   Quantity: ${quantity}`,
      `   Price: ${formatCurrency(product.price)}`,
      `   Subtotal: ${formatCurrency(subtotal)}`,
    ].join('\n');
  });

  return [
    '\u0645\u0631\u062d\u0628\u0627 Boutique',
    '',
    '\u0623\u0631\u063a\u0628 \u0641\u064a \u062a\u0623\u0643\u064a\u062f \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628:',
    '',
    '--------------------',
    'Products:',
    '--------------------',
    productLines.join('\n\n'),
    '',
    '--------------------',
    `Order Total: ${formatCurrency(cartTotal)}`,
    '--------------------',
    '',
    'Customer Information:',
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Address: ${customer.address}`,
    customer.notes ? `Notes: ${customer.notes}` : 'Notes: None',
    '',
    '\u0634\u0643\u0631\u0627',
  ].join('\n');
};

const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      notes: '',
    },
  });

  const customer = useWatch({ control }) ?? {
    name: '',
    phone: '',
    address: '',
    notes: '',
  };

  const openWhatsappOrder = (formValues) => {
    if (items.length === 0) {
      notifications.show({
        message: 'Your cart is empty. Add products before checkout.',
        color: 'brand',
      });
      return;
    }

    try {
      const message = buildWhatsappMessage({
        items,
        cartTotal,
        customer: formValues,
      });
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      const openedWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      if (!openedWindow) {
        notifications.show({
          message: 'WhatsApp could not open. Please allow popups and try again.',
          color: 'red',
        });
        return;
      }

      clearCart();
      notifications.show({
        message: 'Your order details are ready on WhatsApp. Please press Send there to complete your order.',
        color: 'success',
      });
    } catch {
      notifications.show({
        message: 'Could not prepare the WhatsApp order message. Please try again.',
        color: 'red',
      });
    }
  };

  if (items.length === 0) {
    return (
      <Container size="md" py={{ base: 'xl', md: 80 }}>
        <Card bg="cream.1" p="xl" radius="md" withBorder>
          <Stack align="center" gap="md">
            <FiShoppingBag size={32} color="#834621" />
            <Title order={2} c="brand.8" ta="center">Your cart is empty</Title>
            <Text c="dimmed" ta="center">
              Add products to your cart before preparing a WhatsApp order.
            </Text>
            <Button component={Link} to="/products" color="brand">
              Continue Shopping
            </Button>
          </Stack>
        </Card>
      </Container>
    );
  }

  return (
    <Container size="xl" py={{ base: 'md', md: 'xl' }}>
      <Stack gap="xl">
        <Stack gap={4}>
          <Title c="brand.8">Checkout</Title>
          <Text c="dimmed">
            Review your cart, add your details, then open WhatsApp with the order message ready to send.
          </Text>
        </Stack>

        <Alert color="brand" variant="light" radius="md">
          This checkout prepares your order details for WhatsApp. The order is not sent until you press Send in WhatsApp.
        </Alert>

        <form onSubmit={handleSubmit(openWhatsappOrder)}>
          <Grid gutter="lg" align="flex-start">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card bg="cream.1" p="lg" radius="md" withBorder>
                <Stack gap="md">
                  <Title order={3} c="brand.8">Customer Information</Title>
                  <TextInput
                    label="Customer Name"
                    placeholder="Enter your name"
                    withAsterisk
                    {...register('name', {
                      required: 'Name is required',
                      validate: (value) => value.trim().length > 0 || 'Name is required',
                    })}
                    error={errors.name?.message}
                  />
                  <TextInput
                    label="Phone Number"
                    placeholder="Example: 01012345678"
                    withAsterisk
                    {...register('phone', {
                      required: 'Phone number is required',
                      validate: (value) => {
                        const trimmedValue = value.trim();

                        if (!trimmedValue) {
                          return 'Phone number is required';
                        }

                        return phonePattern.test(trimmedValue) || 'Enter a valid phone number';
                      },
                    })}
                    error={errors.phone?.message}
                  />
                  <Textarea
                    label="Address"
                    placeholder="Enter your delivery address"
                    minRows={4}
                    withAsterisk
                    {...register('address', {
                      required: 'Address is required',
                      validate: (value) => value.trim().length > 0 || 'Address is required',
                    })}
                    error={errors.address?.message}
                  />
                  <Textarea
                    label="Notes"
                    placeholder="Optional order notes"
                    minRows={3}
                    {...register('notes')}
                  />
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card bg="cream.1" p="lg" radius="md" withBorder>
                <Stack gap="md">
                  <Title order={3} c="brand.8">Order Summary</Title>
                  <List spacing="sm" size="sm">
                    {items.map(({ product, quantity }) => (
                      <List.Item key={product.id}>
                        <Group justify="space-between" gap="md" align="flex-start">
                          <Stack gap={2}>
                            <Text fw={700} c="brand.8">{product.productname}</Text>
                            <Text c="dimmed">Quantity: {quantity}</Text>
                            <Text c="dimmed">Price: {formatCurrency(product.price)}</Text>
                          </Stack>
                          <Text fw={700} c="brand.7">
                            {formatCurrency(product.price * quantity)}
                          </Text>
                        </Group>
                      </List.Item>
                    ))}
                  </List>

                  <Divider />

                  <Group justify="space-between">
                    <Text fw={700} c="brand.8">Total</Text>
                    <Text fw={700} c="brand.8">{formatCurrency(cartTotal)}</Text>
                  </Group>

                  <Divider />

                  <Stack gap={4}>
                    <Text fw={700} c="brand.8">Customer Review</Text>
                    <Text size="sm" c="dimmed">Name: {customer.name || 'Not provided yet'}</Text>
                    <Text size="sm" c="dimmed">Phone: {customer.phone || 'Not provided yet'}</Text>
                    <Text size="sm" c="dimmed">Address: {customer.address || 'Not provided yet'}</Text>
                    {customer.notes && <Text size="sm" c="dimmed">Notes: {customer.notes}</Text>}
                  </Stack>

                  <Button type="submit" color="success" size="md" fullWidth leftSection={<FiMessageCircle />}>
                    Confirm Order On WhatsApp
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </form>
      </Stack>
    </Container>
  );
};

export default Checkout;
