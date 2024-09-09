import { useFormik } from "formik";
import { Button, Input, Box, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { add } from "../reduxSlices/toDoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taskText: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.taskText) {
        errors.taskText = "Task is required";
      } else if (values.taskText.length < 5) {
        errors.taskText = "Task must be at least 5 characters long";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(add(values.taskText));
      resetForm();
    },
  });

  return (
    <>
      <Box
        display="flex"
        columnGap={3}
        maxWidth="420px"
        justifyContent="space-between"
        as="form"
        onSubmit={formik.handleSubmit}
      >
        <Input
          maxWidth="300px"
          name="taskText"
          onChange={formik.handleChange}
          value={formik.values.taskText}
          placeholder="Enter task"
          isInvalid={formik.touched.taskText && !!formik.errors.taskText}
          borderColor={
            formik.touched.taskText && formik.errors.taskText
              ? "red.500"
              : "gray.200"
          }
        />
        <Button type="submit" colorScheme="teal">
          Add Task
        </Button>
      </Box>
      {formik.touched.taskText && formik.errors.taskText && (
        <Text color="red.500" mb={4}>
          {formik.errors.taskText}
        </Text>
      )}
    </>
  );
};

export default TodoForm;
