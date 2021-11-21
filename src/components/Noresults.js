import Snap from "../assets/img/snap.jpg";

const Noresults = () => {
  return (
    <div className="Noresults">
      <div className="result-text">
        Hmm... No results... Did this one get snapped ?!
      </div>
      <div className="Noresults-picture">
        <img src={Snap} alt="Snap" />
      </div>
    </div>
  );
};

export default Noresults;
