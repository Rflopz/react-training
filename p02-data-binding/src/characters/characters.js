import React, { useState } from "react";
import charactersList, { filterByHouse, getAllHouses } from "./charactersList";
import "./characters.style.css";

const initialHousesState = getAllHouses();

function Characters() {
  const [houses, setHouses] = useState(initialHousesState);
  const [house, setHouse] = useState("All");
  const [characters, setCharacters] = useState(charactersList);

  /**
   * Toggles the active state of the given house name
   * @param {string} houseName
   */
  const toggleHouseActive = (houseName) => {
    setHouses((state) =>
      state.map((item) =>
        item.name !== houseName ? item : { ...item, active: !item.active }
      )
    );
    setHouse(houseName);
  };

  const handleClick = (e) => {
    const houseName = e.target.name;

    setHouses(initialHousesState);

    if (houseName === "All") {
      // dislay all chanracters
      setCharacters(charactersList);
      setHouse("All");
      return;
    }

    toggleHouseActive(houseName);

    setCharacters(filterByHouse(houseName));
    // display all characters of active house
    console.log(characters);
  };

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
            </button>
          ))}
        </div>
      </div>
      <h4>Characters for {house}</h4>
      <div className="characters">
        {characters?.map(({ id, fullName, title, imageUrl, name }) => (
          <div key={id}>
            <h1>{fullName}</h1>
            <h2>{title}</h2>
            <img key={id} src={imageUrl} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
