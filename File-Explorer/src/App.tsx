import { useState } from 'react'
import './App.css'
import explorer from './data/data'

function App() {
const[explorerData, setExplorerData] = useState(explorer)
console.log(explorerData);
  return (
   <div>
    {}
   </div>
  )
}

export default App
