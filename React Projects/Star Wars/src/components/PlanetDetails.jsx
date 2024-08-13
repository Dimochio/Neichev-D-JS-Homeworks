import PropTypes from "prop-types";

function PlanetDetails({ selectedPlanet: selectedPlanet }) {
  return (
    <div>
      <h4>{selectedPlanet.name}</h4>
      <p>{selectedPlanet.details}</p>
    </div>
  );
}

PlanetDetails.propTypes = {
  selectedPlanet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlanetDetails;
