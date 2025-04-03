import './App.css'
import { FaGithub } from "react-icons/fa";
import Linkedin from './components/Linkedin';

function App() {

  return (
    <div className='container-app'>
      <h1>Links Eric Mara</h1>
      
      <a href="https://github.com/Eric02222" className='links' target='_blank'><FaGithub />Github</a>

      <Linkedin/>

    </div>
  )
}

export default App
