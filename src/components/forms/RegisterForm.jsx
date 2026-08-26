import { TextInput, PasswordInput, Box, Flex, Button, Text, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

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
      
        <Anchor component={Link} to="/" c="pink.7" fw={600} fz="sm" underline="hover">
          ⏪ Home
        </Anchor>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginTop: '20px'
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
      
          <Flex direction={{ base: "column", md: "row" }} gap="md">
            <TextInput
              variant='filled'
              size='md'
              radius='md'
              label='First Name'
              placeholder="John"
              withAsterisk
              flex={1}
              error={errors.firstName?.message}
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters"
                },
              })}
            />

            <TextInput
              variant='filled'
              size='md'
              radius='md'
              label='Last Name'
              placeholder="Doe"
              withAsterisk
              flex={1}
              error={errors.lastName?.message}
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name must be at least 3 characters"
                },
              })}
            />
          </Flex>

          <TextInput
            variant='filled'
            size='md'
            radius='md'
            w="100%"
            label='Email'
            placeholder="example@gmail.com"
            withAsterisk
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
            variant='filled'
            size='md'
            radius='md'
            w="100%"
            label="Password"
            placeholder="Create your Password"
            withAsterisk
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


          <PasswordInput
            variant='filled'
            size='md'
            radius='md'
            w="100%"
            label="Confirm Password"
            placeholder="Confirm your Password"
            withAsterisk
            error={errors.confirmPassword?.message}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) => value === password || "Passwords don’t match"
            })}
          />

          
          <Button
            type="submit"
            mt="sm"
            size="md"
            radius="md"
            fullWidth
            bg="pink.5"
          >
            Sign Up
          </Button>

         
          <Box ta="center" mt="xs">
            <Text fz="sm" c="gray.7">
              Already have an account?{' '}
              <Anchor component={Link} to="/login" c="pink.7" fw={700} underline="hover">
                Sign In
              </Anchor>
            </Text>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default RegisterForm;