function Total({ totalPrice }) {
  return (
    <div className="total">
      <h2>Всього: {totalPrice}$</h2>
      <button className="checkout-button">Оформити замовлення</button>
    </div>
  );
}

export default Total;
