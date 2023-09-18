import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const Handler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/home",
      element: (
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Handler;
