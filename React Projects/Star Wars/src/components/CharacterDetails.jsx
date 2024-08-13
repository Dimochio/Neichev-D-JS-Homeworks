import PropTypes from "prop-types";

function CharacterDetails({ selectedCharacter: selectedCharacter }) {
  return (
    <div>
      <h4>{selectedCharacter.name}</h4>
      <p>{selectedCharacter.details}</p>
    </div>
  );
}

CharacterDetails.propTypes = {
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterDetails;
