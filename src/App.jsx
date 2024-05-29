import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import NotFound from './Components/NotFound'
import Signin from './Components/Signin'
import SignUp from './Components/Signup'
import './App.css'
import Healler from './Components/Healler'
import Consultation from './Components/main/Consultation'
// import Home from './Components/main/Home'
import Post from './Components/main/Post'
import Search from './Components/main/Search'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<Healler />} />
        <Route path='/consultation' element={<Consultation />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/post' element={<Post />} />
        <Route path='/search' element={<Search />} />
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
