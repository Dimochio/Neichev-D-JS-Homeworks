import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        maxW: "3xl",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        py: 10,
        px: 6,
      }}
    >
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to My Application!
      </Heading>
      <Text fontSize="xl" mb={6}>
        We're glad to have you here. Start managing your tasks effectively and
        stay organized.
      </Text>
      <Button
        as={Link}
        to="/main"
        size="lg"
        colorScheme="teal"
        bg="teal.500"
        _hover={{ bg: "teal.400" }}
      >
        Get Started
      </Button>
    </Container>
  );
};

export default WelcomePage;
