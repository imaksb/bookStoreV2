import PropTypes from "prop-types";
function CartItem({ book, onAddToBasket, onRemoveItemFromBasket, onRemove }) {
  return (
    <tr>
      <td>
        <div className="basket-item-detail">
          <img src={`../../${book.image}`} alt="" />

          <div className="book-data">
            <h1>{book.title}</h1>
            <p>{book.description.slice(0, 20)}</p>
          </div>
        </div>
      </td>
      <td>{book.price} $</td>
      <td>
        {" "}
        <div className="basket-item-count">
          <button onClick={() => onRemoveItemFromBasket(book)}>-</button>
          <input
            className="quantity"
            type="number"
            value={book.count}
            disabled
          />
          <button onClick={() => onAddToBasket(book)}>+</button>
        </div>
      </td>
      <td>{book.count * book.price}$</td>
      <td>
        <a href="#" className="delete-button" onClick={() => onRemove(book)}>
          X
        </a>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  book: PropTypes.object.isRequired,
  onAddToBasket: PropTypes.func,
};

export default CartItem;
