import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './Hooks/useFetch'
import Accordeon from './Components/accordeon'

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

function App() {
  const [pokemonName, setPokemonName] = useState("") // User input
  const [searchQuery, setSearchQuery] = useState("pikachu") // Actual search term
  const { data, isLoading, error } = useFetch<Pokemon>({ url: `${BASE_URL}/${searchQuery}` })

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  function handleSearch() {
    if (pokemonName.trim()) {
      setSearchQuery(pokemonName.trim().toLowerCase())
    }
  }

  useEffect(() => {
    if (data) {
      const find = pokemons.find((pokemon) => pokemon.name === data?.name)
      if (!find) {
        setPokemons((prev) => [...prev, data])
      }
    }
  }, [data])

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

      {pokemons.length > 0 && (
        <Accordeon title="Pokemons">
          {
            pokemons.map((pokemon) => (
              <Accordeon.Item title={pokemon.name} key={pokemon.name}>
                {(isOpen) => (
                  <>
                    <p className="pokemon-name">{pokemon.name}</p>
                    {isOpen && <p className="pokemon-image">
                      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
                    </p>}
                  </>
                )}
              </Accordeon.Item>
            ))
          }
        </Accordeon>
      )}
    </>
  )
}

export default App
