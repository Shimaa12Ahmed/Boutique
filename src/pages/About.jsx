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
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiArrowRight, FiHeart, FiSearch, FiShoppingBag, FiSmile } from 'react-icons/fi';

import { productData } from '../constants/DataOfProducts';

const MotionBox = motion.create(Box);

const valueCards = [
  {
    title: 'Curated Collection',
    description: 'A focused mix of bouquets, keychains, mirrors, and soft decorative pieces.',
    icon: FiShoppingBag,
  },
  {
    title: 'Elegant Selection',
    description: 'Warm colors and gentle details that fit the Boutique style.',
    icon: FiHeart,
  },
  {
    title: 'Easy Discovery',
    description: 'Simple browsing, search, and category filters to help customers find pieces quickly.',
    icon: FiSearch,
  },
  {
    title: 'Personal Service',
    description: 'Orders continue through WhatsApp so details can be confirmed in conversation.',
    icon: FiSmile,
  },
];

const About = () => {
  const heroProduct = productData.find((product) => product.category === 'Mirror') || productData[0];
  const storyProduct = productData.find((product) => product.category === 'Bouquet') || productData[1];

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
                  About Boutique
                </Badge>
                <Stack gap="sm">
                  <Title c="brand.8" order={1} fz={{ base: 36, md: 52 }} lh={1.05}>
                    A softer way to discover thoughtful pieces
                  </Title>
                  <Text c="dimmed" size="lg" maw={560}>
                    Boutique brings together charming handmade-style gifts and decorative accents in a warm, easy shopping experience.
                  </Text>
                </Stack>
                <Button component={Link} to="/products" color="brand" size="md" rightSection={<FiArrowRight />} w="fit-content">
                  Explore Our Collection
                </Button>
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

        <MotionBox
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="xl">
            <Image
              src={storyProduct.img}
              alt={storyProduct.productname}
              h={{ base: 260, md: 380 }}
              fit="cover"
              radius="md"
            />

            <Stack justify="center" gap="md">
              <Title order={2} c="brand.8">Our Story</Title>
              <Text c="dimmed" size="md">
                Boutique is built around the joy of finding elegant, giftable pieces without making shopping feel complicated. The collection is intentionally simple: a warm mix of products customers can browse, compare, and order with clarity.
              </Text>
              <Text c="dimmed" size="md">
                From soft bouquets to playful keychains and decorative mirrors, the experience is designed to feel personal, calm, and easy to continue through WhatsApp when a customer is ready to confirm details.
              </Text>
            </Stack>
          </SimpleGrid>
        </MotionBox>

        <Stack gap="md">
          <Stack gap={4}>
            <Title order={2} c="brand.8">What Makes Boutique Special</Title>
            <Text c="dimmed">A simple shopping flow with pieces that feel warm, polished, and easy to gift.</Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
            {valueCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <MotionBox
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
                >
                  <Card bg="cream.1" radius="md" p="lg" h="100%" withBorder>
                    <Stack gap="sm">
                      <Icon size={24} color="#834621" />
                      <Text fw={700} c="brand.8">{item.title}</Text>
                      <Text size="sm" c="dimmed">{item.description}</Text>
                    </Stack>
                  </Card>
                </MotionBox>
              );
            })}
          </SimpleGrid>
        </Stack>

        <Card bg="brand.0" radius="md" p={{ base: 'lg', md: 'xl' }} withBorder>
          <Group justify="space-between" gap="lg">
            <Stack gap={4}>
              <Title order={2} c="brand.8">Ready to browse the collection?</Title>
              <Text c="dimmed">Find your favorite piece, add it to cart, and confirm the order through WhatsApp.</Text>
            </Stack>
            <Button component={Link} to="/products" color="success" size="md" rightSection={<FiArrowRight />}>
              Explore Our Collection
            </Button>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
};

export default About;
