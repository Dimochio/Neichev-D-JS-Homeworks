import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  OrderedList,
  ListItem,
  CloseButton,
  Box,
  Divider,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { remove, toggleIsDone } from "../reduxSlices/toDoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <Box mt={4}>
      <OrderedList
        sx={{
          maxWidth: "420px",
          maxHeight: "400px",
          minHeight: "200px",
          overflowY: "auto",
          padding: 5,
          margin: 0,
          border: "1px",
          borderRadius: "10px",
          borderColor: "gray.300",
        }}
      >
        {todos.map((task) => (
          <React.Fragment key={task.id}>
            <ListItem
              sx={{
                padding: 2,
                marginLeft: 4,
              }}
              className="list-item"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "nowrap",
                  columnGap: 3,
                }}
              >
                <Box lineHeight={"1"}>
                  <Checkbox
                    onChange={() => dispatch(toggleIsDone(task.id))}
                    isChecked={task.isDone}
                  />
                </Box>
                <Text as="span" className={task.isDone ? "task-completed" : ""}>
                  {task.text}
                </Text>

                <CloseButton
                  ml={"auto"}
                  sx={{
                    width: "25px",
                    height: "25px",
                    padding: 1,
                  }}
                  onClick={() => dispatch(remove(task.id))}
                />
              </Box>
            </ListItem>
            <Divider
              sx={{
                marginTop: "0 !important",
              }}
              _last={{
                display: "none",
              }}
            />
          </React.Fragment>
        ))}
      </OrderedList>
      <Box mt={2}>
        <Text>Total items: {todos.length}</Text>
      </Box>
    </Box>
  );
};

export default TodoList;
