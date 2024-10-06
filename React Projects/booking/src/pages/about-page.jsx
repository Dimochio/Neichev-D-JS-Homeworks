import { Box, Heading, Text } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Box textAlign="center" mt={6} mb={6}>
      <Heading as={"h1"}>
        About{" "}
        <Text as={"span"} color={"orange.400"}>
          Us
        </Text>
      </Heading>
      <Text>We provide the best booking services for hotels worldwide.</Text>
    </Box>
  );
};

export default AboutPage;
