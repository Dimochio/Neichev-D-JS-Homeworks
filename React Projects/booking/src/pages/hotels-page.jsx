import { useSelector } from "react-redux";
import { Box, Image, Grid, Heading, Text } from "@chakra-ui/react";

const HotelsPage = () => {
  const { hotels, loading, error } = useSelector((state) => state.hotels);

  return (
    <div>
      <Heading as="h1" mb={6}>
        Available Hotels
      </Heading>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {hotels.length > 0 ? (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {hotels.map((hotel) => (
            <Box
              key={hotel.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={4}
            >
              <Image
                src={hotel.image_url}
                alt={hotel.name}
                boxSize="200px"
                objectFit="cover"
                mx="auto"
              />
              <Box mt={4}>
                <Heading as="h3" size="md">
                  {hotel.name}
                </Heading>
                <Text>{hotel.address}</Text>
                <Text>Rating: {hotel.hotel_rating}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
};

export default HotelsPage;
