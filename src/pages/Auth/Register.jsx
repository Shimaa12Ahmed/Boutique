import { Box, Flex, Card } from "@mantine/core";
import Auth from "../../layouts/Auth";
import RegisterForm from "../../components/forms/RegisterForm";
import { motion } from "framer-motion";
import { authTransition,authTransitionVariants } from "../../styles/animations";
const MotionBox = motion.create(Box);
const Register = () => {
  const direction=-1;
  return (
    <Flex h={{ base: "auto", md: "100vh" }} minH="100vh" justify="center" align="center" p={{ base: "sm", md: 0 }}>
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
          direction={{ base: 'column', md: 'row-reverse' }}
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
transition={authTransition}د>
            
            <Auth 
              title="Create Account" 
              subtitle="Join us today to start your journey" 
              reverse={true}
            />
          </MotionBox>

          <Box w={{ base: "100%", md: "50%" }} p={{ base: "md", md: "xl" }}>
            <RegisterForm />
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Register;