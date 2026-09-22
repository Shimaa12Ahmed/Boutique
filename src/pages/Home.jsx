import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiArrowRight, FiGift, FiHeart, FiShoppingBag } from 'react-icons/fi';

import ProductCard from '../components/cards/ProductCard';
import { productData } from '../constants/DataOfProducts';
import { useCart } from '../context/useCart';

const MotionBox = motion.create(Box);

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const featuredProducts = productData.slice(0, 4);
  const categories = Array.from(new Set(productData.map((product) => product.category)));
  const heroProduct = productData.find((product) => product.category === 'Bouquet') || productData[0];

  const handleAddToCart = (product) => {
    addToCart(product);
    notifications.show({
      message: 'Product Added To Cart',
      color: 'success',
    });
  };

  const openCategory = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <Container size="xl" py={{ base: 'md', md: 'xl' }}>
      <Stack gap={{ base: 'xl', md: 56 }}>
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Card bg="cream.1" radius="md" p={{ base: 'lg', md: 'xl' }} withBorder>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="xl">
              <Stack justify="center" gap="lg">
                <Badge color="brand" variant="light" size="lg" radius="sm" w="fit-content">
                  Handmade Boutique Pieces
                </Badge>
                <Stack gap="sm">
                  <Title c="brand.8" order={1} fz={{ base: 36, md: 52 }} lh={1.05}>
                    Soft gifts with a warm handmade touch
                  </Title>
                  <Text c="dimmed" size="lg" maw={560}>
                    Explore charming bouquets, keychains, and decorative pieces created for thoughtful everyday gifting.
                  </Text>
                </Stack>
                <Group gap="sm">
                  <Button component={Link} to="/products" color="brand" size="md" rightSection={<FiArrowRight />}>
                    Shop Products
                  </Button>
                  <Button component={Link} to="/cart" variant="light" color="brand" size="md">
                    View Cart
                  </Button>
                </Group>
              </Stack>

              <Card bg="cream.0" radius="md" p="sm" withBorder>
                <Image
                  src={heroProduct.img}
                  alt={heroProduct.productname}
                  h={{ base: 260, md: 420 }}
                  fit="cover"
                  radius="sm"
                />
              </Card>
            </SimpleGrid>
          </Card>
        </MotionBox>

        <Stack gap="md">
          <Group justify="space-between" align="flex-end">
            <Stack gap={4}>
              <Title order={2} c="brand.8">Featured Categories</Title>
              <Text c="dimmed">Start with the Boutique styles customers browse most.</Text>
            </Stack>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
            {categories.map((category) => {
              const categoryProduct = productData.find((product) => product.category === category);
              const productCount = productData.filter((product) => product.category === category).length;

              return (
                <Card
                  key={category}
                  bg="cream.1"
                  radius="md"
                  p="md"
                  withBorder
                  component="button"
                  type="button"
                  onClick={() => openCategory(category)}
                  style={{ cursor: 'pointer', textAlign: 'left' }}
                >
                  <Stack gap="sm">
                    <Image
                      src={categoryProduct.img}
                      alt={category}
                      h={150}
                      fit="cover"
                      radius="sm"
                    />
                    <Group justify="space-between">
                      <Text fw={700} c="brand.8">{category}</Text>
                      <Badge color="brand" variant="light">{productCount}</Badge>
                    </Group>
                  </Stack>
                </Card>
              );
            })}
          </SimpleGrid>
        </Stack>

        <Stack gap="md">
          <Group justify="space-between" align="flex-end">
            <Stack gap={4}>
              <Title order={2} c="brand.8">Featured Products</Title>
              <Text c="dimmed">A small edit from the current Boutique collection.</Text>
            </Stack>

            <Button component={Link} to="/products" color="brand" variant="light" rightSection={<FiArrowRight />}>
              View All Products
            </Button>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </SimpleGrid>
        </Stack>

        <Card bg="brand.0" radius="md" p={{ base: 'lg', md: 'xl' }} withBorder>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Stack gap="xs">
              <FiShoppingBag size={24} color="#834621" />
              <Text fw={700} c="brand.8">Curated Collection</Text>
              <Text size="sm" c="dimmed">A focused catalog of handmade pieces without visual clutter.</Text>
            </Stack>
            <Stack gap="xs">
              <FiHeart size={24} color="#834621" />
              <Text fw={700} c="brand.8">Elegant Details</Text>
              <Text size="sm" c="dimmed">Warm colors, soft textures, and giftable finishing touches.</Text>
            </Stack>
            <Stack gap="xs">
              <FiGift size={24} color="#834621" />
              <Text fw={700} c="brand.8">Thoughtful Picks</Text>
              <Text size="sm" c="dimmed">Simple pieces for birthdays, graduations, desks, and everyday keepsakes.</Text>
            </Stack>
          </SimpleGrid>
        </Card>

        <Card bg="cream.1" radius="md" p="xl" withBorder>
          <Group justify="space-between" gap="lg">
            <Stack gap={4}>
              <Title order={2} c="brand.8">Find your next Boutique favorite</Title>
              <Text c="dimmed">Use search and category filters to browse the full collection.</Text>
            </Stack>
            <Button component={Link} to="/products" color="success" size="md" rightSection={<FiArrowRight />}>
              Explore Catalog
            </Button>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
};

export default Home;
