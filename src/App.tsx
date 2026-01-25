import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './Hooks/useFetch'

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

function App() {
  const [pokemonName, setPokemonName] = useState("") // User input
  const [searchQuery, setSearchQuery] = useState("pikachu") // Actual search term
  const { data, isLoading, error } = useFetch({ url: `${BASE_URL}/${searchQuery}` })

  function handleSearch() {
    if (pokemonName.trim()) {
      setSearchQuery(pokemonName.trim().toLowerCase())
    }
  }
  return (
    <>
      <h1>pokeapi</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Pokemon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {data && !isLoading && !error && (
        <>
          <p className="pokemon-name">{data.name}</p>
          <p className="pokemon-image">
            <img src={data?.sprites?.front_default} alt={data.name} />
          </p>
        </>
      )}
    </>
  )
}

export default App
