import {
  Card,
  Center,
  Flex,
  Group,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  Button,
  Image,
} from '@mantine/core';

import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useForm, Controller } from 'react-hook-form';
import { RiImageAddLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const ProductForm = ({
  mode = 'create',
  onSubmit,
  initialValues,
}) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleReject = (files) => {
    console.log(files);
  };

  const {
    register: product,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const isCreate = mode === 'create';

  useEffect(() => {
    if (initialValues) {
      const productValues = { ...initialValues };
      delete productValues.image;

      reset(productValues);
    }
  }, [initialValues, reset]);

  return (
    <Card
      w="100%"
      maw={600}
      mx="auto"
      bg="cream.1"
      p="xl"
    >
      <Center mb="xl">
        <Title c="brand.7">
          {isCreate ? 'Add Product' : 'Update Product'}
        </Title>
      </Center>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="md">

         
          <Controller
            control={control}
            name="image"
            rules={{
              required: isCreate ? 'Please Upload Image' : false,
            }}
            render={({ field }) => (
              <Dropzone
                onDrop={(files) => {
                  const file = files[0];

                  field.onChange(file);

                  const preview = URL.createObjectURL(file);

                  setImagePreview(preview);
                }}
                onReject={handleReject}
                accept={IMAGE_MIME_TYPE}
                maxSize={5 * 1024 ** 2}
                multiple={false}
                error={errors.image?.message}
              >
                <Flex
                  mih={{ base: 180, sm: 220, md: 250 }}
                  direction="column"
                  justify="center"
                  align="center"
                  gap="sm"
                  style={{ cursor: 'pointer' }}
                >

                  {(imagePreview || initialValues?.image) ? (
                    <Image
                      src={imagePreview || initialValues?.image}
                      alt="Product preview"
                      w={150}
                      h={150}
                      fit="cover"
                      radius="md"
                    />
                  ) : (
                    <RiImageAddLine
                      size="clamp(60px, 15vw, 100px)"
                      opacity={0.5}
                    />
                  )}

                  <Text
                    fw={600}
                    size="lg"
                    c="brand.7"
                  >
                    {isCreate
                      ? 'Upload Product Image'
                      : 'Update Product Image'}
                  </Text>

                  <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                  >
                    Click or drag & drop your image here
                  </Text>

                  <Text
                    size="xs"
                    c="dimmed"
                    ta="center"
                  >
                    PNG, JPG or WEBP • Max 5MB
                  </Text>

                </Flex>
              </Dropzone>
            )}
          />

          <TextInput
            label="Product Name"
            placeholder="Enter Product Name"
            size="md"
            withAsterisk
            {...product('name', {
              required: 'Product Name Required',
            })}
            error={errors.name?.message}
          />

          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing="md"
          >
            <TextInput
              type="number"
              label="Price"
              placeholder="Price $"
              size="md"
              withAsterisk
              {...product('price', {
                required: 'Price Required',
              })}
              error={errors.price?.message}
            />

            <Controller
              name="category"
              control={control}
              rules={{
                required: 'Please Select Category',
              }}
              render={({ field }) => (
                <Select
                  size="md"
                  label="Category"
                  placeholder="KeyChain"
                  data={['KeyChain', 'Bouquet']}
                  withAsterisk
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.category?.message}
                />
              )}
            />
          </SimpleGrid>

         
          <Controller
            name="status"
            control={control}
            rules={{
              required: 'Please Select Status',
            }}
            render={({ field }) => (
              <Select
                size="md"
                label="Status"
                placeholder="Available"
                data={['Available', 'Out Of Stock']}
                withAsterisk
                value={field.value}
                onChange={field.onChange}
                error={errors.status?.message}
              />
            )}
          />

         
          <Textarea
            size="lg"
            label="Product Description"
            placeholder="Description......"
            withAsterisk
            minRows={4}
            {...product('description', {
              required: 'Description Required',
            })}
            error={errors.description?.message}
          />

          <Group justify="center" py="sm">
            <Button
              type="submit"
              color="brand"
              size="md"
            >
              {isCreate ? 'Add Product' : 'Update Product'}
            </Button>
          </Group>

        </Stack>
      </form>
    </Card>
  );
};

export default ProductForm;

