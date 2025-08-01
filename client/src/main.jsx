import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import { Layout } from "./App";
import "./index.css";
import {
  Dashboard,
  Login,
  Register,
  StatusPage,
  TaskDetail,
  Tasks,
  Trash,
  Users,
} from "./pages";
import store from "./redux/store";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "tasks", element: <Tasks /> },
        { path: "completed/:status?", element: <Tasks /> },
        { path: "in-progress/:status?", element: <Tasks /> },
        { path: "todo/:status?", element: <Tasks /> },
        { path: "trashed", element: <Trash /> },
        { path: "task/:id", element: <TaskDetail /> },
        { path: "team", element: <Users /> },
        { path: "status", element: <StatusPage /> },
      ],
    },
    {
      path: "/log-in",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <main className="light">
        <div className='w-full min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0df4]'>
          <RouterProvider router={router} />
        </div>
        <Toaster richColors position='top-center' />
      </main>
    </Provider>
  </React.StrictMode>
);