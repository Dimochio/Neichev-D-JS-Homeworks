import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

function AboutMePage() {
  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading mb={4}>About Me</Heading>
      <VStack spacing={4} align="stretch">
        <Image
          borderRadius="full"
          objectFit="cover"
          boxSize="150px"
          src="src/assets/TummaniyYozh.jpg"
          alt="Your Name"
          mb={4}
        />
        <Text fontSize="lg">
          Hi there! I'm Dima, a passionate developer with a love for creating
          beautiful and functional web applications. With years of experience in
          JavaScript, React, and other modern technologies, I strive to build
          products that solve real-world problems and delight users.
        </Text>
        <Text fontSize="lg">
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or enjoying a good book with a
          cup of coffee. I'm always eager to learn and grow, both personally and
          professionally.
        </Text>
        <Text fontSize="lg">
          Thank you for visiting my page! Feel free to reach out if you'd like
          to collaborate or just chat about tech.
        </Text>
      </VStack>
    </Box>
  );
}

export default AboutMePage;
