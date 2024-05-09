import Products from "./Products";
import { PropTypes } from "prop-types";
import Cart from "./cart/Cart";
export default function Shop({
  products,
  onAddToBasket,
  isBasketOpen,
  basketItems,
  onRemoveItemFromBasket,
  onRemove,
  onSelectBasket,
}) {
  return (
    <>
      {!isBasketOpen ? (
        <div className="shop">
          <Filters />
          <Products products={products} onAddToBasket={onAddToBasket} />
        </div>
      ) : (
        <Cart
          books={basketItems}
          onSelectBasket={onSelectBasket}
          onAddToBasket={onAddToBasket}
          onRemoveItemFromBasket={onRemoveItemFromBasket}
          onRemove={onRemove}
        />
      )}
    </>
  );
}

Shop.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddToBasket: PropTypes.func.isRequired,
  isBasketOpen: PropTypes.bool.isRequired,
  basketItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveItemFromBasket: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
function Filters() {
  return (
    <div className="shop-menu">
      <div className="filters">
        <a id="all" className="a-clicked filter">
          Всі
        </a>
        <a id="e-book" className="filter">
          Електронні
        </a>
        <a id="paperback" className="filter">
          Паперові
        </a>
        <a id="hardcover" className="filter">
          Тврерда палітурка
        </a>
      </div>
    </div>
  );
}
