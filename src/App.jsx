import reactLogo from './assets/react.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

// page
import {PageOne, PageTwo} from './pages/Page'
import {MainPage} from './pages/MainPage'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}>
            <Route index element={<div>Página no seleccionada</div>} />
            <Route path='*' element={<PageOne/>}/>
            <Route path='two' element={<PageTwo/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
