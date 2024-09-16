import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import PlanetDetails from "./PlanetDetails";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../redux/Slices/planetSlice";

function PlanetList() {
  const dispatch = useDispatch();
  const { planets, loading } = useSelector((state) => state.planets);

  const handleClick = (planet) => {
    setSelectedPlanet(planet);
  };

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);

  const [selectedPlanet, setSelectedPlanet] = useState();

  if (loading) return <Spinner size="lg" />;

  return (
    <Box className="container-fluid">
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Planets
      </Heading>
      <UnorderedList styleType="none" m={0} p={0}>
        {planets.map((planet, index) => (
          <ListItem
            key={index}
            cursor="pointer"
            mb={2}
            _hover={{ color: "blue.500" }}
            onClick={() => handleClick(planet)}
          >
            {planet.name}
          </ListItem>
        ))}
      </UnorderedList>

      {selectedPlanet && (
        <>
          <Divider my={4} />
          <PlanetDetails selectedPlanet={selectedPlanet} />
        </>
      )}
    </Box>
  );
}

export default PlanetList;
