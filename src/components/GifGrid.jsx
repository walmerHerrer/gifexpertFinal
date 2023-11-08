import PropTypes from "prop-types";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="row">
        {isLoading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
