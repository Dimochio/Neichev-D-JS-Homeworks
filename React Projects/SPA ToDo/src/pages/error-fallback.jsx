import { Button, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <Box role="alert" textAlign="center" mt={10}>
      <Heading as="h2" size="xl" mb={4}>
        Oops! Something went wrong.
      </Heading>
      <Button as={Link} to={"/"} colorScheme="teal">
        Back to homepage
      </Button>
    </Box>
  );
};

export default ErrorFallback;
