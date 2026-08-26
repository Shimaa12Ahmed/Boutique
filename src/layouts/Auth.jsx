import { Flex, Paper, Title, Text } from "@mantine/core";
import { motion } from 'motion/react';
import { useMediaQuery } from "@mantine/hooks";
import { mobileAuthItemVariants, desktopAuthItemVariants } from "../styles/animations";

const MotionPaper = motion.create(Paper);

const Auth = ({ title = "Welcome Back", subtitle = "Please login to your account to continue",reverse=false }) => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const variants = isMobile ? mobileAuthItemVariants : desktopAuthItemVariants;
const radiusStyle = reverse
    ? {
        borderBottomLeftRadius: isMobile ? "80% 40%" : "100% 100%",
        borderTopLeftRadius: isMobile ? "0px" : "20px",
      }
    : {
        borderBottomRightRadius: isMobile ? "80% 40%" : "100% 100%",
        borderTopRightRadius: isMobile ? "0px" : "20px",
      };
  return (
    <Paper
      w="100%"
      h="100%"
      flex={{ md: 1 }}
      bg="pink"
      p={{ base: "lg", md: "xl" }}
      style={{
      
      ...radiusStyle,
        overflow: "hidden",
        position: "relative"
      }}
    >
   
      <Flex direction="row" gap="xs" justify="center">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <MotionPaper
            key={item}
            w={{ base: 20, md: 45 }}
            h={{ base: 20, md: 45 }}
            bg="cream.0"
            radius="50%"
            m={2}
            initial={{
              opacity: 0.2,
              scale: 0,
              x: variants[index]?.x || 0,
              y: variants[index]?.y || 0
            }}
            transition={{ duration: 2, repeat: Infinity }}
            animate={{
              opacity: 0.6,
              scale: 0.7,
              x: variants[index]?.x || 0,
              y: variants[index]?.y || 0
            }}
          />
        ))}
      </Flex>

      
      <Flex
        p={{ base: 10, md: 20 }}
        mt={{ base: 15, md: 40 }}
        w="100%"
        justify="center"
        align="center"
        direction="column"
        c="cream.2"
        style={{ textAlign: "center", zIndex: 10, position: "relative" }}
      >
        <Title fz={{ base: 24, md: 48 }} lh={1.2}>
          {title}
        </Title>
        <Text fw={400} fz={{ base: 13, md: 18 }} mt={8}>
          {subtitle}
        </Text>
      </Flex>
    </Paper>
  );
};

export default Auth;