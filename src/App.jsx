import {useRoutes} from 'react-router-dom'
import './App.css'
import { ShowCreators } from './pages/ShowCreators';
import { AddCreator } from './pages/AddCreator';

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <ShowCreators/>
    },
    {
      path: "/add",
      element: <AddCreator />
    }
  ]);

  return element;
}

export default App
