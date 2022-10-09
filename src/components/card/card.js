import "./Card.css";

function Card({ cardElements }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={
            "https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/totalpeopledisease.png"
          }
        ></img>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>An IGEM Image</h3>
        </div>
        <div className="card-description">
          <p>
            How I would like to get this done!How I would like to get this
            done!How I would like to get this done!How I would like to get this
            done!How I would like to get this done!
          </p>
        </div>
      </div>

      <div className="button">
        <button>
          <a>Learn more!</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
