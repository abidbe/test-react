import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Index";
import AboutPage from "../pages/about";
import RootLayout from "../layouts/rootlayout";
import BlogPage from "../pages/blogs";
import Show from "../pages/blogs/show";
import { posts, post } from "../apis/loader";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
        loader: posts,
      },
      {
        path: "/blogs/:id",
        element: <Show />,
        loader: post,
      },
    ],
  },
]);
