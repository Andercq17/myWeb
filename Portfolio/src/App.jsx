import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes} from './routes/index.jsx';
import Square from './components/Square'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Square>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Square>  
      </Router>
    </>
  )
}

export default App
