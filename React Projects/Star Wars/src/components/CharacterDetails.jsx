import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function CharacterDetails({ selectedCharacter: selectedCharacter }) {
  return (
    <Box mt={5}>
      <Heading as="h4" mb={3}>
        {selectedCharacter.name}
      </Heading>
      <Text mb={2}>Gender: {selectedCharacter.gender}</Text>
      <Text mb={2}>Mass: {selectedCharacter.mass}kg</Text>
      <Text mb={2}>Height: {selectedCharacter.height}cm</Text>
      <Text mb={2}>Hair Color: {selectedCharacter.hair_color}</Text>
      <Text>Skin Color: {selectedCharacter.skin_color}</Text>
    </Box>
  );
}

CharacterDetails.propTypes = {
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
  }).isRequired,
};
export default CharacterDetails;
