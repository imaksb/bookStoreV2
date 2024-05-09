import { PropTypes } from "prop-types";

export default function Products({ products, onAddToBasket }) {
  return (
    <div className="products">
      {products.map((book) => (
        <Product key={book.id} book={book} onAddToBasket={onAddToBasket} />
      ))}
    </div>
  );
}

Products.propTypes = {
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
};

function Product({ book, onAddToBasket }) {
  return (
    <div className="product">
      <img src={`../../src/${book.image}`} alt="" />
      <div className="book-detail">
        <div className="main-information">
          <h4>{book.title.slice(0, 10)}</h4>
          <p className="author">{book.manufacturer}</p>
          <p>{book.description.slice(0, 30)}</p>
        </div>
        <div className="info-section">
          <button
            className="book_button_info"
            onClick={() => onAddToBasket(book)}
          >
            ADD <span>{book.price}$</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToBasket: PropTypes.func.isRequired,
};
