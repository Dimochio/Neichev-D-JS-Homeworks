import { useFormik } from "formik";
import { Button, Input, Box, Text } from "@chakra-ui/react";
import { useTasks } from "../contexts/taskContext";

const TodoForm = () => {
  const { addTask } = useTasks();

  const formik = useFormik({
    initialValues: {
      task: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.task) {
        errors.task = "Task is required";
      } else if (values.task.length < 5) {
        errors.task = "Task must be at least 5 characters long";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      addTask({ id: Date.now(), name: values.task });
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
          name="task"
          onChange={formik.handleChange}
          value={formik.values.task}
          placeholder="Enter task"
          isInvalid={formik.touched.task && !!formik.errors.task}
          borderColor={
            formik.touched.task && formik.errors.task ? "red.500" : "gray.200"
          }
        />
        <Button type="submit" colorScheme="teal">
          Add Task
        </Button>
      </Box>
      {formik.touched.task && formik.errors.task && (
        <Text color="red.500" mb={4}>
          {formik.errors.task}
        </Text>
      )}
    </>
  );
};

export default TodoForm;
