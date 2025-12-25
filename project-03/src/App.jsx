import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Arenapage from './pages/Arenapage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/arena" element={<Arenapage />} />
      </Routes>
    </Router>
  )
}

export default App