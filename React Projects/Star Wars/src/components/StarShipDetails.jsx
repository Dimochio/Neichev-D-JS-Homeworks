import PropTypes from "prop-types";

function StarshipDetails({ selectedStarship }) {
  return (
    <div>
      <h4>{selectedStarship.name}</h4>
      <p>{selectedStarship.details}</p>
    </div>
  );
}

StarshipDetails.propTypes = {
  selectedStarship: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};

export default StarshipDetails;
