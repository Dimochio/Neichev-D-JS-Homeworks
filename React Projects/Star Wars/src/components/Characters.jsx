import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import CharacterDetails from "./CharacterDetails";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/Slices/characterSlice";

function CharacterList() {
  const dispatch = useDispatch();
  const { characters, loading } = useSelector((state) => state.characters);

  const handleClick = (character) => {
    setSelectedCharacter(character);
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const [selectedCharacter, setSelectedCharacter] = useState();

  if (loading) return <Spinner size="lg" />;

  return (
    <Box className="container-fluid">
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Planets
      </Heading>
      <UnorderedList styleType="none" m={0} p={0}>
        {characters.map((character, index) => (
          <ListItem
            key={index}
            cursor="pointer"
            mb={2}
            _hover={{ color: "blue.500" }}
            onClick={() => handleClick(character)}
          >
            {character.name}
          </ListItem>
        ))}
      </UnorderedList>

      {selectedCharacter && (
        <>
          <Divider my={4} />
          <CharacterDetails selectedCharacter={selectedCharacter} />
        </>
      )}
    </Box>
  );
}

export default CharacterList;
