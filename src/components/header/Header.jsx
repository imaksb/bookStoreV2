import posterImage from "../../../public/book-poster.svg";
import { PropTypes } from "prop-types";
import Navigate from "./Navigate";
import Poster from "./Poster";
export default function Header({ basket, isBasketOpen, onSelectBasket }) {
  return (
    <>
      <Navigate onSelectBasket={onSelectBasket} basketLength={basket.length} />
      <Poster isBasketOpen={isBasketOpen} posterImage={posterImage} />
    </>
  );
}

Header.propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  isBasketOpen: PropTypes.bool.isRequired,
  onSelectBasket: PropTypes.func.isRequired,
};
