import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiCheck } from "@mdi/js";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  OrderedList,
  ListItem,
  Checkbox,
  Button,
  CloseButton,
  Text,
  Divider,
  Input,
} from "@chakra-ui/react";
import {
  loadRequest,
  updateRequest,
  removeRequest,
} from "../redux/reduxSlices/toDoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSaveClick = (todo) => {
    dispatch(
      updateRequest({
        id: todo.id,
        todo: {
          id: todo.id,
          text: editText,
          isDone: todo.isDone,
        },
      })
    );
    setEditingId(null);
  };

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

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
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <ListItem
              sx={{
                padding: 2,
                marginLeft: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 3,
                }}
              >
                <Checkbox
                  isChecked={todo.isDone}
                  onChange={() =>
                    dispatch(
                      updateRequest({
                        id: todo.id,
                        todo: {
                          id: todo.id,
                          text: todo.text,
                          isDone: !todo.isDone,
                        },
                      })
                    )
                  }
                />
                {editingId === todo.id ? (
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    size="sm"
                  />
                ) : (
                  <Text
                    as="span"
                    className={todo.isDone ? "task-completed" : ""}
                  >
                    {todo.text}
                  </Text>
                )}
                {editingId === todo.id ? (
                  <Button
                    marginLeft="auto"
                    size="sm"
                    onClick={() => handleSaveClick(todo)}
                    aria-label="Save task"
                  >
                    <Icon path={mdiCheck} size={1} />
                  </Button>
                ) : (
                  <Button
                    marginLeft="auto"
                    width="42px"
                    size="sm"
                    onClick={() => handleEditClick(todo)}
                    aria-label="Edit task"
                  >
                    <Icon path={mdiPencilOutline} size={1} />
                  </Button>
                )}
                <CloseButton
                  onClick={() => dispatch(removeRequest(todo.id))}
                  sx={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </Box>
            </ListItem>
            <Divider _last={{ display: "none" }} />
          </React.Fragment>
        ))}
      </OrderedList>
    </Box>
  );
};

export default TodoList;
