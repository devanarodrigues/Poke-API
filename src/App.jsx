import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { useEffect, useState } from 'react'
import DataContext from './context/DataContext'
import axios from 'axios'

function App() {

  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=21")
  const [pokemon, setPokemon] = useState()
  const [renderizar, setRenderizar] = useState(false)

  const getApi = async () => {
    const res = await axios.get(url)
    getPokemon(res.data.results)
  }

  const getPokemon = async (e) => {
    e.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData(e => {
        e = [...e, result.data]
        return e
      })
    })
  }

  useEffect(() => {
    getApi()
  }, [url])

  return (
    <DataContext.Provider value={{ pokeData, setPokemon, pokemon, renderizar, setRenderizar }}>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App
