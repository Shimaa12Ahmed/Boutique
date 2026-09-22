import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Stack,
} from '@mantine/core';

const ProductCard = ({
  product,
  onAddToCart,
  actionLabel = 'Add To Cart',
  variant = 'default',
  children,
}) => {
  const isCompact = variant === 'cart';

  return (
    <Card
      shadow="sm"
      padding={isCompact ? 'md' : 'lg'}
      radius="md"
      withBorder
      bg="cream.0"
      h="100%"
    >
      <Card.Section>
        <Image
          src={product.img}
          h={isCompact ? 130 : 210}
          fit="cover"
          alt={product.productname}
        />
      </Card.Section>

      <Stack gap="xs" mt="md" h={isCompact ? 'auto' : 'calc(100% - 210px)'}>
        <Group justify="space-between" align="flex-start" gap="xs">
          <Text fw={700} c="brand.8" lh={1.2}>
            {product.productname}
          </Text>

          <Badge color="brand" variant="light">
            {product.category}
          </Badge>
        </Group>

        {product.description && !isCompact && (
          <Text size="sm" c="dimmed" lineClamp={2}>
            {product.description}
          </Text>
        )}

        <Group justify="space-between" mt="auto">
          <Text fw={700} c="brand.7">
            EGP {product.price}
          </Text>

          {product.status && (
            <Badge color="success" variant="light">
              {product.status}
            </Badge>
          )}
        </Group>

        {children || (
          onAddToCart && (
            <Button color="success" fullWidth mt="sm" onClick={() => onAddToCart(product)}>
              {actionLabel}
            </Button>
          )
        )}
      </Stack>
    </Card>
  );
};

export default ProductCard;
