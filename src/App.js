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
    fetchData()
  },[])

  const fetchData = async (city) => {
    const APIKEY = '13ed397fbc9f57836cdabea81586c2c3'
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'London'}&appid=${APIKEY}`)
  
    await setAllData({
      city:result.data.name,
      country:result.data.sys.country,
      temperature:result.data.main.temp
    })
  }
  return (
    <div className='App'>
      {console.log('test', allData.country)}
    </div>)
}

export default App;