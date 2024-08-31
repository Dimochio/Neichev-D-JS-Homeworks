import {
  Box,
  Flex,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink as ReactRouterLink } from "react-router-dom";

const links = [
  { name: "Main", path: "/main" },
  { name: "Contacts", path: "/contacts" },
  { name: "About Me", path: "/about-me" },
];

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverBgColor = useColorModeValue("gray.200", "gray.700");
  const activeLinkColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
      }}
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack alignItems={"center"}>
          <HStack as={"nav"} spacing={8}>
            {links.map((link) => (
              <ChakraLink
                as={ReactRouterLink}
                to={link.path}
                key={link.name}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: hoverBgColor,
                }}
                _activeLink={{
                  fontWeight: "bold",
                  color: activeLinkColor,
                }}
              >
                {link.name}
              </ChakraLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
