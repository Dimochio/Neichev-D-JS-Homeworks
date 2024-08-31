import React from "react";
import {
  OrderedList,
  ListItem,
  CloseButton,
  Box,
  Divider,
} from "@chakra-ui/react";
import { useTasks } from "../contexts/taskContext";

const TodoList = () => {
  const { tasks, removeTask } = useTasks();

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
        {tasks.map((task) => (
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
                {task.name}
                <CloseButton
                  sx={{
                    width: "25px",
                    height: "25px",
                    padding: 1,
                  }}
                  onClick={() => removeTask(task.id)}
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
    </Box>
  );
};

export default TodoList;
