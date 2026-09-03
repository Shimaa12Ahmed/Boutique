import { Flex, Text, TextInput, PasswordInput, Button, Box, Anchor } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Flex
      p={{ base: "md", md: "xl" }}
      flex={{ md: 1 }}
      justify="center"
      align="center"
      w="100%"
    >
      <Box w="100%" maw={{ base: "100%", md: "85%" }}>
    
        <Anchor component={Link} to="/" c="brand.7" fw={600} fz="sm" underline="hover">
          ⏪ Home
        </Anchor>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px', 
            marginTop: '20px'
          }}
        >
         
          <TextInput
            variant="filled"
            size="md"
            radius="md"
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            w="100%"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
          />

        
          <PasswordInput
            variant="filled"
            size="md"
            radius="md"
            label="Password"
            withAsterisk
            placeholder="Enter your password"
            w="100%"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              maxLength: {
                value: 20,
                message: "Password must be at most 20 characters"
              }
            })}
          />

          
          <Button
            type="submit"
            mt="sm"
            size="md"
            radius="md"
            fullWidth
            bg="brand.5"
          >
            Login
          </Button>

        
          <Box ta="center" mt="xs">
            <Text fz="sm" c="gray.7">
              Don’t have an account?{' '}
              <Anchor component={Link} to="/register" c="brand.7" fw={700} underline="hover">
                Sign up
              </Anchor>
            </Text>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginForm;