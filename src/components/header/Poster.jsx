function Poster({ isBasketOpen, posterImage }) {
  return (
    <>
      {!isBasketOpen && (
        <header className="poster">
          <div className="poster-text">
            <h2>The world belongs to those who read.</h2>
            <p>Rick Holland</p>
          </div>
          <img src={`../${posterImage}`} alt="" />
        </header>
      )}
    </>
  );
}

export default Poster;
