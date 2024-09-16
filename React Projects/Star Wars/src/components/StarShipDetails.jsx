import PropTypes from "prop-types";
import { Box, Heading, Text } from "@chakra-ui/react";

function StarshipDetails({ selectedStarship }) {
  return (
    <Box mt={5}>
      <Heading as="h4" mb={3}>
        {selectedStarship.name}
      </Heading>
      <Text mb={2}>Model: {selectedStarship.model}</Text>
      <Text mb={2}>Manufacturer: {selectedStarship.manufacturer}h</Text>
      <Text mb={2}>Cost in credits: {selectedStarship.cost_in_credits}</Text>
      <Text mb={2}>Passengers: {selectedStarship.passengers}</Text>
      <Text>
        Max atmosphering speed: {selectedStarship.max_atmosphering_speed}
      </Text>
    </Box>
  );
}

StarshipDetails.propTypes = {
  selectedStarship: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    max_atmosphering_speed: PropTypes.string.isRequired,
  }).isRequired,
};

export default StarshipDetails;
