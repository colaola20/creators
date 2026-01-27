import {useRoutes} from 'react-router-dom'
import './App.css'
import { ShowCreators } from './pages/ShowCreators';
import { AddCreator } from './pages/AddCreator';
import { EditCreator } from './pages/EditCreator';
import { ViewCreator } from "./pages/ViewCreator"

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

  return element;
}

export default App
