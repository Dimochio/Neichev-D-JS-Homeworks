import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import StarshipDetails from "./StarShipDetails";
import { useDispatch, useSelector } from "react-redux";
import { getStarShips } from "../redux/Slices/starShipSlice";

function StarshipList() {
  const dispatch = useDispatch();
  const { starShips, loading } = useSelector((state) => state.starShips);

  const handleClick = (starship) => {
    setSelectedStarship(starship);
  };

  useEffect(() => {
    dispatch(getStarShips());
  }, [dispatch]);

  const [selectedStarship, setSelectedStarship] = useState();

  if (loading) return <Spinner size="lg" />;

  return (
    <Box className="container-fluid">
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Star Ships
      </Heading>
      <UnorderedList styleType="none" m={0} p={0}>
        {starShips.map((starship, index) => (
          <ListItem
            key={index}
            cursor="pointer"
            mb={2}
            _hover={{ color: "blue.500" }}
            onClick={() => handleClick(starship)}
          >
            {starship.name}
          </ListItem>
        ))}
      </UnorderedList>

      {selectedStarship && (
        <>
          <Divider my={4} />
          <StarshipDetails selectedStarship={selectedStarship} />
        </>
      )}
    </Box>
  );
}

export default StarshipList;
