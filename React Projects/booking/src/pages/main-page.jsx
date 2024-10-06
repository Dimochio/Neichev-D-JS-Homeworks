import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  Select,
  FormControl,
  Input,
  FormErrorMessage,
  Heading,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelsRequest } from "../redux/Slices/hotelsSlice";
import axios from "axios";

const MainPage = () => {
  const [destinations, setDestinations] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.hotels);

  useEffect(() => {
    axios.get("http://localhost:3000/destination").then((response) => {
      setDestinations(response.data);
    });
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          destination: "",
          checkin: "",
          checkout: "",
          adults: "",
          children: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.destination)
            errors.destination = "Destination is required";
          if (!values.checkin) errors.checkin = "Check-in date is required";
          if (!values.checkout) errors.checkout = "Check-out date is required";
          if (!values.adults) errors.adults = "Number of adults is required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(fetchHotelsRequest(values));
          setSubmitting(false);
          navigate("/hotels");
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Flex justifyContent="center" gap={4} mb={4} mt={4}>
              <FormControl
                isInvalid={errors.destination && touched.destination}
              >
                <Field
                  as={Select}
                  name="destination"
                  placeholder="Destination"
                  borderRadius="md"
                  boxShadow="md"
                >
                  {destinations.map((dest) => (
                    <option key={dest.id} value={dest.label}>
                      {dest.label}
                    </option>
                  ))}
                </Field>
                <FormErrorMessage>{errors.destination}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.checkin && touched.checkin}>
                <Field
                  as={Input}
                  type="date"
                  name="checkin"
                  placeholder="Check in"
                  borderRadius="md"
                  boxShadow="md"
                />
                <FormErrorMessage>{errors.checkin}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.checkout && touched.checkout}>
                <Field
                  as={Input}
                  type="date"
                  name="checkout"
                  placeholder="Check out"
                  borderRadius="md"
                  boxShadow="md"
                />
                <FormErrorMessage>{errors.checkout}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.adults && touched.adults}>
                <Field
                  as={Input}
                  type="number"
                  name="adults"
                  placeholder="Adults"
                  borderRadius="md"
                  boxShadow="md"
                />
                <FormErrorMessage>{errors.adults}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <Field
                  as={Input}
                  type="number"
                  name="children"
                  placeholder="Children"
                  borderRadius="md"
                  boxShadow="md"
                />
              </FormControl>
              <Button
                type="submit"
                bg={"orange.400"}
                color={"white"}
                isLoading={isSubmitting || loading}
                boxShadow="md"
                textTransform="uppercase"
                _hover={{ textDecoration: "none", bg: "orange.600" }}
              >
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>

      <Box textAlign="center" mt={6} mb={6}>
        <Heading as={"h1"}>
          Travel With{" "}
          <Box as="span" color="orange.400">
            Booking
          </Box>
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </>
  );
};

export default MainPage;
