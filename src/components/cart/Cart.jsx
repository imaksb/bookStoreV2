import CartItem from "./CartItem";
import PropTypes from "prop-types";
import Total from "./Total";
import { useState } from "react";
import Stats from "./Stats";

function getTotalPrice(books) {
  return books.reduce((acc, book) => acc + book.price * book.count, 0);
}

export default function Cart({
  books,
  onAddToBasket,
  onRemoveItemFromBasket,
  onSelectBasket,
  onRemove,
}) {
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  function handleOpenTab(status) {
    if (status === isStatsOpen) return;
    setIsStatsOpen(status);
  }
  return (
    <>
      <div className="basket">
        {!books.length ? (
          <h1 className="empty-basket" style={{ textAlign: "center" }}>
            Ваш кошик порожній
          </h1>
        ) : (
          <>
            <div className="action-menu">
              <div className="tabs">
                <a
                  href="#"
                  className={`stats-button ${isStatsOpen ? null : "active"}`}
                  onClick={() => handleOpenTab(false)}
                >
                  Кошик
                </a>
                <a
                  href="#"
                  className={`stats-button ${!isStatsOpen ? null : "active"}`}
                  onClick={() => handleOpenTab(true)}
                >
                  Статистика
                </a>
              </div>
              <a
                href="#"
                className="delete-button close"
                onClick={onSelectBasket}
              >
                X
              </a>
            </div>
            {!isStatsOpen && (
              <div className="basket-item">
                <table>
                  <tr>
                    <th>Назва книги</th>
                    <th>Ціна (за шт)</th>
                    <th>Кількість</th>
                    <th>Всього</th>
                  </tr>

                  {books.map((book) => (
                    <CartItem
                      onRemoveItemFromBasket={onRemoveItemFromBasket}
                      key={book.id}
                      book={book}
                      onAddToBasket={onAddToBasket}
                      onRemove={onRemove}
                    />
                  ))}
                </table>

                <Total totalPrice={getTotalPrice(books)} />
              </div>
            )}

            {isStatsOpen && <Stats books={books} />}
          </>
        )}
      </div>
    </>
  );
}

Cart.propTypes = {
  books: PropTypes.array.isRequired,
  onAddToBasket: PropTypes.func.isRequired,
};
