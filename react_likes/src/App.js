import logo from './logo.svg'
import './App.css'
import Likes from './components/Likes'

function App() {
  return (
    <div id="content">
      <div className="bank">
        <Likes name="Checking" />
      </div>
    </div>
  )
}

export default App
