const ComicPicture = ({ comic }) => {
  return !comic.thumbnail.path.includes("image_not_available") &&
    !comic.thumbnail.path.includes("4c002e0305708") ? (
    <div className="comic-picture">
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
    </div>
  ) : (
    <div className="comic-picture nopic noselect">?</div>
  );
};

export default ComicPicture;
