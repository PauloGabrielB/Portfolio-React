import './main'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <Main />
      <Projects />
      <Footer />
    </Router>
  )
}

export default App
