import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root.jsx";
import PageNotFound from "./pages/nof-found.jsx";
import TodoPage from "./pages/todo.jsx";
import ContactsPage from "./pages/contacts.jsx";
import AboutMePage from "./pages/about.jsx";
import WelcomePage from "./pages/welcome.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { TaskProvider } from "./contexts/taskContext";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/main",
        element: <TodoPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/about-me",
        element: <AboutMePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <TaskProvider>
        <RouterProvider router={route} />
      </TaskProvider>
    </ChakraProvider>
  </StrictMode>
);
