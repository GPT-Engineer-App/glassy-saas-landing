import { Box, Flex, Heading, Text, Container, Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="full" p={0} m={0}>
      <Box bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)" w="full" p={4}>
        <Flex justify="space-between" align="center">
          <Heading color="white" fontSize="xl">Iraglass</Heading>
          <FaBars color="white" />
        </Flex>
      </Box>
      <Flex direction="column" align="center" justify="center" height="calc(100vh - 64px)" bg="linear-gradient(145deg, rgba(10,10,10,1) 0%, rgba(45,45,45,1) 100%)">
        <Heading as="h1" size="2xl" fontWeight="bold" color="white" mb={4} textShadow="2px 2px 8px rgba(0,0,0,0.6)">Welcome to Iraglass</Heading>
        <Text fontSize="xl" color="gray.300" mb={6}>Revolutionizing the way you do business.</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </Flex>
    </Container>
  );
};

export default Index;