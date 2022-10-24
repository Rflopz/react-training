import React, { useState } from 'react'
import charactersList, { filterByHouse, getAllHouses } from './charactersList'
import "./characters.style.css";

const initialHousesState = getAllHouses();

function Characters() {

  const [houses, setHouses] = useState(initialHousesState);
  const [housesInitial, setHousesInitial] = useState(charactersList);
  const [houseNameChange, sethouseNameChange] = useState('All');
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
    sethouseNameChange(houseName);
    setHouses(initialHousesState);

    if (houseName === "All") {
      // dislay all chanracters
      setHousesInitial(charactersList);
      return;
    }

    toggleHouseActive(houseName)

    // display all characters of active house
    const characters = filterByHouse(houseName)

    setHousesInitial(characters);
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
        <h1>{houseNameChange}</h1>
      { housesInitial?.map(({id, fullName, title, imageUrl, image})=>(

          <div key={id}>
             <h2>{fullName}</h2>
              <h3>{title}</h3>          
                <img key={id} src={imageUrl} alt={image} />
          </div>
            
 

          )
          ) }
      </div>
    </div>
  )
}

export default Characters