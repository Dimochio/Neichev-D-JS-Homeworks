import "./App.css";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";
import { Container, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Container p={4}>
      <Heading mb={4}>To-Do List</Heading>
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
