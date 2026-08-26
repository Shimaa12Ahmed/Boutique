import LoginForm from '../../components/forms/LoginForm';
import { Box, Flex, Card } from '@mantine/core';
import Auth from '../../layouts/Auth';
import { motion } from 'framer-motion';
import { authTransitionVariants,authTransition } from '../../styles/animations';
const MotionBox = motion.create(Box);
const Login = () => {
  const direction=1;
  return (
    <Flex h={{ base: "auto", md: "100vh" }} 
    minH="100vh" 
    justify="center" 
    align="center" 
    p={{ base: "sm", md: 0 }}>
      <Card
        bg={{ base: "pink.0", md: "transparent" }}
        shadow={{ base: "md", md: "none" }}
        radius={{ base: "lg", md: 0 }}
        p={0}
        w={{ base: "100%", md: "100%" }}
        maw={{ sm: 500, md: "none" }}
        h={{ base: "auto", md: "100%" }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 'md', md: 'lg' }}
          justify="center"
          align="stretch"
          h={{ base: "auto", md: "100%" }}
        >
          <MotionBox 
          w={{ base: "100%", md: "50%" }}
          variants={authTransitionVariants}
initial="initial"
animate="animate"
exit="exit"
custom={direction}
transition={authTransition}>
           
            <Auth 
              title="Welcome Back" 
              subtitle="Please login to your account to continue your journey" 
            />
           
          </MotionBox>

          <Box w={{ base: "100%", md: "50%" }} p={{ base: "md", md: "xl" }}>
            <LoginForm />
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Login;