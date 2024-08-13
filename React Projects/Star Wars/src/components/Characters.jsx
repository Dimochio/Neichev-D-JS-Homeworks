import { useState } from "react";
import CharacterDetails from "./CharacterDetails";

const characters = [
  { name: "Luke Skywalker", details: "Details about Luke Skywalker" },
  { name: "Darth Vader", details: "Details about Darth Vader" },
  { name: "Leia Organa", details: "Details about Leia Organa" },
];

function CharacterList() {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  const handleClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <>
      <div className="container-fluid">
        <h2 className="d-flex align-items-center justify-content-center mb-3">
          Characters
        </h2>
        <ul>
          {characters.map((character, index) => (
            <li
              className="cursor-pointer mb-2"
              key={index}
              onClick={() => handleClick(character)}
            >
              {character.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedCharacter && (
        <>
          <hr />
          <CharacterDetails selectedCharacter={selectedCharacter} />
        </>
      )}
    </>
  );
}

export default CharacterList;
