import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";

export const GifItem = ({ title, url, id }) => {
  return (
    <>
      <div className="col-3">
        <div className="card">
          <img src={url} alt={title} width={250} height={250} />
          <div className="card-content">
            <h2>{title}</h2>
            <a href="#">Leer más</a>
          </div>
        </div>
      </div>
    </>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
