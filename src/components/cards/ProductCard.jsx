import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
} from '@mantine/core';

import { productData } from '../../constants/DataOfProducts';

const ProductCard = () => {
  return (
    <Grid>
      {productData.map((product) => (
        <Grid.Col
          key={product.id}
          span={{ base: 12, md: 8, lg: 4 }}
        >
          <Card shadow="sm" padding="lg" withBorder>
            <Card.Section
              component="a"
              href="https://mantine.dev/"
            >
              <Image
                src={product.img}
                height={160}
                alt={product.productname}
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>
                {product.productname}
              </Text>

              <Badge color="brand.9">
                {product.category}
              </Badge>
            </Group>

            <Button color="success.5" fullWidth mt="md">
              Buy Now
            </Button>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ProductCard;