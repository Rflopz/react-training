import React, { useState } from 'react'
import charactersList, { filterByHouse, getAllHouses } from './charactersList'
import "./characters.style.css";

const initialHousesState = getAllHouses();
const initialCharacters = charactersList;

function Characters() {

  const [houses, setHouses] = useState(initialHousesState);
  const [characters, setCharacters] = useState(initialCharacters);
  const [selectedHouse, setSelectedHouse] = useState("All houses");

  /**
   * Toggles the active state of the given house name
   * @param {string} houseName 
   */
  const toggleHouseActive = (houseName) => {
    setHouses(state => state.map(item => 
      (item.name !== houseName) ? item : {...item, active: !item.active }
    ))
  }

  const handleClick = (e) => {
    const houseName = e.target.name

    setHouses(initialHousesState);

    if (houseName === "All") {
      setCharacters(charactersList)
      setSelectedHouse("All houses")
      return;
    }

    toggleHouseActive(houseName)
    setSelectedHouse("House of " + houseName)

    // display all characters of active house
    setCharacters(filterByHouse(houseName))
    console.log(characters)
  }

  return (
    <div className="container">
      <div className="menu">
        <h4>Houses</h4>
        <div className="houses">
          {houses?.map((house) => (
            <button 
              key={house.name}
              name={house.name} 
              className={house.active ? "active" : ""}
              onClick={handleClick}
            >
              {house.name}
            </button>)
          )}
        </div>
      </div>
      <div className="characters">
        <h3>{selectedHouse}</h3>
          {characters?.map((character) => (
            <div className="character" key={character.id}>
              <img src={character.imageUrl} alt={character.fullName}/>
              <div class="image-footer">{character.fullName}<br/>{character.title}</div>
              <br/>
            </div>)
          )}
      </div>
    </div>
  )
}

export default Characters