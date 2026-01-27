import {useRoutes} from 'react-router-dom'
import './App.css'
import { ShowCreators } from './pages/ShowCreators';
import { AddCreator } from './pages/AddCreator';
import { EditCreator } from './pages/EditCreator';

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
    }
  ]);

  return element;
}

export default App
