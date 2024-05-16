import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import NotFound from './Components/NotFound'
import Signin from './Components/Signin'
import SignUp from './Components/Signup'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
 )
}

export default App
