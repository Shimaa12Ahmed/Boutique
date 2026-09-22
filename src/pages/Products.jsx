import {
  Badge,
  Button,
  Card,
  Center,
  Container,
  Group,
  Pagination,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';

import ProductCard from '../components/cards/ProductCard';
import { productData } from '../constants/DataOfProducts';
import { useCart } from '../context/useCart';

const PRODUCTS_PER_PAGE = 8;
const ALL_CATEGORIES = 'All';

const Products = () => {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => [
    ALL_CATEGORIES,
    ...Array.from(new Set(productData.map((product) => product.category))),
  ], []);

  const categoryFromUrl = searchParams.get('category');
  const selectedCategory = categories.includes(categoryFromUrl)
    ? categoryFromUrl
    : ALL_CATEGORIES;

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return productData
      .filter((product) => (
        selectedCategory === ALL_CATEGORIES || product.category === selectedCategory
      ))
      .filter((product) => {
        if (!normalizedSearch) {
          return true;
        }

        return [product.productname, product.category, product.description]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(normalizedSearch));
      });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * PRODUCTS_PER_PAGE,
    safePage * PRODUCTS_PER_PAGE,
  );

  const updateCategory = (category) => {
    setCurrentPage(1);

    if (category === ALL_CATEGORIES) {
      setSearchParams({});
      return;
    }

    setSearchParams({ category });
  };

  const updateSearch = (event) => {
    setSearchQuery(event.currentTarget.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setCurrentPage(1);
    setSearchParams({});
  };

  const clearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    notifications.show({
      message: 'Product Added To Cart',
      color: 'success',
    });
  };

  return (
    <Container size="xl" py={{ base: 'md', md: 'xl' }}>
      <Stack gap="xl">
        <Group justify="space-between" align="flex-end" gap="md">
          <Stack gap={4}>
            <Title c="brand.8">Products</Title>
            <Text c="dimmed">
              Browse handmade bouquets, keychains, and boutique accents.
            </Text>
          </Stack>

          <Text size="sm" fw={600} c="brand.7">
            {filteredProducts.length} products
          </Text>
        </Group>

        <Card bg="cream.1" p="md" radius="md" withBorder>
          <Stack gap="md">
            <TextInput
              value={searchQuery}
              onChange={updateSearch}
              placeholder="Search products or categories"
              leftSection={<FiSearch />}
              rightSection={searchQuery ? (
                <FiX
                  aria-label="Clear search"
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onClick={clearSearch}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      clearSearch();
                    }
                  }}
                />
              ) : null}
              size="md"
            />

            <Group gap="xs">
              {categories.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <Badge
                    key={category}
                    component="button"
                    type="button"
                    size="lg"
                    radius="sm"
                    color={isActive ? 'brand' : 'cream'}
                    variant={isActive ? 'filled' : 'light'}
                    onClick={() => updateCategory(category)}
                    style={{ cursor: 'pointer' }}
                  >
                    {category}
                  </Badge>
                );
              })}
            </Group>
          </Stack>
        </Card>

        {paginatedProducts.length > 0 ? (
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Card bg="cream.1" p="xl" radius="md" withBorder>
            <Center>
              <Stack align="center" gap="md">
                <Title order={3} c="brand.8" ta="center">No products found</Title>
                <Text c="dimmed" ta="center">
                  Try adjusting your search or category filter.
                </Text>
                <Button color="brand" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </Stack>
            </Center>
          </Card>
        )}

        {totalPages > 1 && (
          <Center>
            <Pagination
              value={safePage}
              onChange={setCurrentPage}
              total={totalPages}
              color="brand"
              radius="sm"
            />
          </Center>
        )}
      </Stack>
    </Container>
  );
};

export default Products;
