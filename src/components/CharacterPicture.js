const CharacterPicture = ({ character }) => {
  return !character.thumbnail.path.includes("image_not_available") &&
    !character.thumbnail.path.includes("4c002e0305708") ? (
    <div className="character-picture">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
    </div>
  ) : (
    <div className="character-picture nopic noselect">?</div>
  );
};

export default CharacterPicture;
