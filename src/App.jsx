import './App.css'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  useRoutes, useLocation
} from 'react-router-dom'

// page
import {PageOne, PageTwo} from './pages/Page'
import {MainPage} from './pages/MainPage'

function Routes(){
  const location = useLocation();
  useEffect(() => {
    console.log('Estás en la ruta', location.pathname);
  }, [location])

  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage/>,
      children:[
        {
          index: true,
          element: <div>Página index</div>
        },
        {
          path: '*',
          element: <PageOne/>
        },
        {
          path: 'two',
          element: <PageTwo />
        }
      ]
    }
  ])
  return routes;
}

function App() {

  return (
    <div className="App">
      <Router>
        <Routes/>
      </Router>
    </div>
  )
}

export default App
