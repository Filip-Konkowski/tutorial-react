import './App.css'
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [allData, setAllData] = useState({
    city:'',
    country:'',
    temperature:''
  }) 

  useEffect(() => {
    // we add what we want to happen after rendering
    // fetch data from DB by API
  })
  return (
    <div className='App'>

    </div>)
}

export default App;