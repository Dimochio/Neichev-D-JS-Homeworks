import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main-page.jsx";
import AboutPage from "./pages/about-page.jsx";
import HotelsPage from "./pages/hotels-page.jsx";
import PageNotFound from "./pages/nof-found.jsx";
import Root from "./pages/root.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/hotels", element: <HotelsPage /> },
      { path: "*", element: <PageNotFound /> },
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
