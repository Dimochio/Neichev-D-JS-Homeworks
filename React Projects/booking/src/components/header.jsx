import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Heading, Spacer, Link, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      position={"fixed"}
      w={"100%"}
      as="header"
      boxShadow={"0px 7px 5px -6px rgba(0,0,0,0.75)"}
      bg="white"
      p={4}
      align="center"
    >
      <Box>
        <Flex flexWrap={"nowrap"} alignItems={"center"} size="lg">
          <Box
            w={"30px"}
            h={"30px"}
            mr={1}
            borderRadius={"50%"}
            bg={"orange.400"}
          ></Box>
          <Heading as={"h1"} size="lg" color={"orange.400"}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
              Booking
            </Link>
          </Heading>
        </Flex>
      </Box>

      <Spacer />

      <Box>
        <Flex gap={4}>
          <Button
            as={RouterLink}
            bg={"orange.400"}
            color={"white"}
            to="/"
            fontSize="lg"
            _hover={{ textDecoration: "none", bg: "orange.600" }}
            boxShadow="md"
          >
            Home
          </Button>

          <Button
            as={RouterLink}
            bg={"orange.400"}
            color={"white"}
            to="/about"
            fontSize="lg"
            _hover={{ textDecoration: "none", bg: "orange.600" }}
            boxShadow="md"
          >
            About
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
