import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom";
import { TodoInfoProvider } from './data/data'
import { Top } from "./pages/top"
import { Detail } from "./pages/detail"
import { Edit } from "./pages/edit"

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Top/>
  },
  {
    path: "todos/:todoID",
    element: <Detail/>
  },
  {
    path: "todos/:todoID/edit",
    element: <Edit/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoInfoProvider>
      <RouterProvider router={router} />
    </TodoInfoProvider>
  </React.StrictMode>
)
