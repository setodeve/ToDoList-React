import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <h1>Hello</h1>
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
    <App />
  </React.StrictMode>,
)
