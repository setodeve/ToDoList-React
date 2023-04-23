import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom";
import { TodoInfoProvider } from './data/data'
import {Top} from "./pages/top"

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Top/>
  },
  {
    path: "todos",
    element: <h1>Hello</h1>
  },
  {
    path: "todos/:todoID",
    element: <h1>Hello</h1>
  },
  {
    path: "todos/:todoID/edit",
    element: <h1>Hello</h1>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoInfoProvider>
      <RouterProvider router={router} />
    </TodoInfoProvider>
  </React.StrictMode>
)
