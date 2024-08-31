import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

function ContactsPage() {
  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading mb={4}>Contact Us</Heading>
      <Text mb={8}>
        If you have any questions or would like to get in touch, feel free to
        reach out using the form below. We are here to help!
      </Text>

      <VStack spacing={4} align="stretch">
        <Input placeholder="Your Name" variant="filled" />
        <Input placeholder="Your Email" variant="filled" />
        <Textarea placeholder="Your Message" variant="filled" />
        <Button colorScheme="teal" size="md">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}

export default ContactsPage;
