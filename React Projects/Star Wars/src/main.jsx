import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root.jsx";
import PageNotFound from "./pages/nof-found.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import PlanetList from "./components/Planets.jsx";
import CharacterList from "./components/Characters.jsx";
import StarshipList from "./components/StarShips.jsx";
import store from "./store.js";

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
        element: <PlanetList />,
      },
      {
        path: "/planets",
        element: <PlanetList />,
      },
      {
        path: "/characters",
        element: <CharacterList />,
      },
      {
        path: "/star-ships",
        element: <StarshipList />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
