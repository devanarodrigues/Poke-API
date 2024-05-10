import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { useEffect, useState } from 'react'
import DataContext from './context/DataContext'
import axios from 'axios'

function App() {

  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=21")
  const [loading, setLoading] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getApi = async () => {
    setLoading(true)
    const res = await axios.get(url)
    getPokemon(res.data.results)

    res.data.next ? setNextUrl(res.data.next) : setNextUrl(null)
    res.data.previous ? setPrevUrl(res.data.previous) : setPrevUrl(null)
    console.log(res.data)
  }

  const getPokemon = async (e) => {
    e.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData(e => {
        e = [...e, result.data]
        return e
      })
      setLoading(false)
    })
  }

  useEffect(() => {
    getApi()
  }, [url])

  return (
    <DataContext.Provider value={{ pokeData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/Poke-API" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App
