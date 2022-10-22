import React, { useState } from 'react'
import charactersList, { filterByHouse, getAllHouses, filterById } from './charactersList'
import "./characters.style.css";

const initialHousesState = getAllHouses();


function Characters() {

  const [houses, setHouses] = useState(initialHousesState);
  const [characterFamily, setCharacterFamily] = useState("All")
  const [selectedCharacters, setSelectedCharacters] = useState(charactersList)
  const [character, setCharacter] = useState([])

  /**
   * Toggles the active state of the given house name
   * @param {string} houseName 
   */
  const toggleHouseActive = (houseName) => {
    setHouses(state => state.map(item =>
      (item.name !== houseName) ? item : { ...item, active: !item.active }
    ))
  }

  const toggleCharacterActive = (characterId) => {
    const charactedIdToFind = parseInt (characterId)

    setSelectedCharacters (state => state.map(item =>
        (item.id === charactedIdToFind) ? { ...item, active: true} : { ...item, active: false})
    )
  }

  const handleClick = (e) => {
    const houseName = e.target.name

    setCharacterFamily(houseName)
    setHouses(initialHousesState);
    setCharacter([])

    if (houseName === "All") {
      setSelectedCharacters(charactersList)
      return;
    }

    toggleHouseActive(houseName)

    const characters = filterByHouse(houseName)
    setSelectedCharacters(characters)
  }


  const handleClickSelectCharacter = (e) => {
    const id = e.target.name
    const character = filterById(id)

    setCharacter(character)
    toggleCharacterActive(id)
  }


  return (

    <div className='mainContainer'>
      <div className='menuSection'>
        <h4>Houses</h4>
        <div className='houses'>
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
      <div className='charactersSection'>
        <h4>{characterFamily}</h4>

        <div className='charters'>
          {selectedCharacters.map((character) => (
            <button
              key={character.id}
              name={character.id}
              className={character.active ? "active" : ""}
              onClick={handleClickSelectCharacter}
            >
              {character.fullName}
            </button>
          ))
          }
        </div>
      </div>

      <div className='detailsSection'>
        <h4>Details</h4>
        {character.map((characterData) => (
          <div className='charactersCard'>
            <div className='title'>{characterData.title}</div>
            <div className='cardBody'>
              <img className='cardImage' img src={characterData.imageUrl} alt="" sizes='150px' />
            </div>
            <div className='cardFooter'>
              <label > {characterData.fullName} </label>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}


export default Characters