import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./routes/__root";
import HomePage from "./routes/index";
import RegisterPage from "./routes/register";
import SuccessPage from "./routes/success";
import SitemapPage from "./routes/sitemap[.]xml.tsx";
import NotFoundPage from "./routes/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "success", element: <SuccessPage /> },
      { path: "sitemap.xml", element: <SitemapPage /> },
    ],
    errorElement: <NotFoundPage />,
  },
]);
