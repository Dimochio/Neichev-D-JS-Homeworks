import { useState } from "react";
import PlanetDetails from "./PlanetDetails";

const planets = [
  { name: "Tatooine", details: "Details about Tatooine" },
  { name: "Alderaan", details: "Details about Alderaan" },
  { name: "Hoth", details: "Details about Hoth" },
];

function PlanetList() {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

  const handleClick = (starship) => {
    setSelectedPlanet(starship);
  };

  return (
    <>
      <div className="container-fluid">
        <h2 className="d-flex align-items-center justify-content-center mb-3">
          Planets
        </h2>
        <ul>
          {planets.map((planet, index) => (
            <li
              className="cursor-pointer mb-2"
              key={index}
              onClick={() => handleClick(planet)}
            >
              {planet.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedPlanet && (
        <>
          <hr />
          <PlanetDetails selectedPlanet={selectedPlanet} />
        </>
      )}
    </>
  );
}

export default PlanetList;
