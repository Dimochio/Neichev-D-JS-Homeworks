import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Container
      textAlign="center"
      py={10}
      px={6}
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist.
      </Text>
      <Button
        as={Link}
        to="/"
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
      >
        Go to Home
      </Button>
    </Container>
  );
}

export default PageNotFound;
