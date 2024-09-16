import PropTypes from "prop-types";
import { Box, Heading, Text } from "@chakra-ui/react";

function PlanetDetails({ selectedPlanet: selectedPlanet }) {
  return (
    <Box mt={5}>
      <Heading as="h4" mb={3}>
        {selectedPlanet.name}
      </Heading>
      <Text mb={2}>Population: {selectedPlanet.population}</Text>
      <Text mb={2}>Rotation Period: {selectedPlanet.rotation_period}</Text>
      <Text mb={2}>Climate: {selectedPlanet.climate}</Text>
      <Text mb={2}>Gravity: {selectedPlanet.gravity}</Text>
      <Text>Terrain: {selectedPlanet.terrain}</Text>
    </Box>
  );
}

PlanetDetails.propTypes = {
  selectedPlanet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlanetDetails;
