import { useState } from "react";
import StarshipDetails from "./StarShipDetails";

const starships = [
  { name: "Millennium Falcon", details: "Details about Millennium Falcon" },
  { name: "X-Wing", details: "Details about X-Wing" },
  { name: "TIE Fighter", details: "Details about TIE Fighter" },
];

function StarshipList() {
  const [selectedStarship, setSelectedStarship] = useState(starships[0]);

  const handleClick = (starship) => {
    setSelectedStarship(starship);
  };
  return (
    <>
      <div className="container-fluid">
        <h2 className="d-flex align-items-center justify-content-center mb-3">
          Starships
        </h2>
        <ul>
          {starships.map((starship, index) => (
            <li
              className="cursor-pointer mb-2"
              key={index}
              onClick={() => handleClick(starship)}
            >
              {starship.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedStarship && (
        <>
          <hr />
          <StarshipDetails selectedStarship={selectedStarship} />
        </>
      )}
    </>
  );
}

export default StarshipList;
