import ErrorBoundary from "../components/error-boundary";
import TodoForm from "../components/todo-form";
import TodoList from "../components/todo-list";
import { Container, Heading } from "@chakra-ui/react";

function TodoPage() {
  return (
    <ErrorBoundary>
      <Container p={4}>
        <Heading mb={4}>To-Do List</Heading>
        <TodoForm />
        <TodoList />
      </Container>
    </ErrorBoundary>
  );
}

export default TodoPage;
