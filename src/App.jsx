import {useRoutes} from 'react-router-dom'
import './App.css'
import { ShowCreators } from './pages/ShowCreators';
import { AddCreator } from './pages/AddCreator';
import { EditCreator } from './pages/EditCreator';
import { ViewCreator } from "./pages/ViewCreator"
import { useEffect, useState } from "react";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <ShowCreators/>
    },
    {
      path: "/add",
      element: <AddCreator />
    },
    {
      path: "/edit/:id",
      element: <EditCreator/>
    },
    {
      path: "/view/:id",
      element: <ViewCreator/>
    }
  ]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/getData")
      .then(res => res.json())
      .then(setData);
  }, []);

  return element;
}

export default App
