import {
  createBrowserRouter,
  //   BrowserRouter,
  //   Routes,
  //   Route,
} from "react-router-dom";
// import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Root from "../Root";
import NotFound from "./NotFound";
import ErrorComponent from "../components/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
